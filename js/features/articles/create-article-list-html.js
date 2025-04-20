import {
  getFavourites,
  isFavourite,
  toggleFavourite,
} from "../../utils/favourites.js";

export default function createArticleListHtml(container, articles) {
  if (articles.length === 0) {
    return "<div class='text-center'>No articles found</div>";
  }

  const articleElements = articles.map((recipe) => createArticleCard(recipe));
  container.innerHTML = "";
  container.className =
    "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
  container.append(...articleElements);
}

function createArticleCard(article) {
  const { image, id, title, description } = article;

  const card = document.createElement("a");
  card.href = `/article.html?id=${id}`;
  card.className =
    "relative block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 flex flex-col h-full";
  card.style.textDecoration = "none";

  const favBtn = document.createElement("button");
  favBtn.type = "button";
  favBtn.className =
    "absolute top-2 right-2 z-10 p-1 bg-white/80 rounded-full hover:bg-white shadow";
  favBtn.innerHTML = isFavourite(id)
    ? `<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' class='w-6 h-6 text-red-500'><path fill-rule='evenodd' d='M12.1 4.435c1.74-1.72 4.56-1.72 6.3 0 1.72 1.72 1.72 4.52 0 6.24l-6.07 6.06a.75.75 0 0 1-1.06 0l-6.07-6.06c-1.72-1.72-1.72-4.52 0-6.24 1.74-1.72 4.56-1.72 6.3 0Z' clip-rule='evenodd'/></svg>`
    : `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6 text-red-500'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16.5 3.75a5.25 5.25 0 0 1 3.71 8.96l-7.07 7.07a.75.75 0 0 1-1.06 0l-7.07-7.07a5.25 5.25 0 1 1 7.42-7.42l.42.42.42-.42a5.25 5.25 0 0 1 3.63-1.54Z'/></svg>`;
  favBtn.addEventListener("click", function (e) {
    e.preventDefault();
    toggleFavourite(id, article);
    favBtn.innerHTML = isFavourite(id)
      ? `<svg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 24 24' class='w-6 h-6 text-red-500'><path fill-rule='evenodd' d='M12.1 4.435c1.74-1.72 4.56-1.72 6.3 0 1.72 1.72 1.72 4.52 0 6.24l-6.07 6.06a.75.75 0 0 1-1.06 0l-6.07-6.06c-1.72-1.72-1.72-4.52 0-6.24 1.74-1.72 4.56-1.72 6.3 0Z' clip-rule='evenodd'/></svg>`
      : `<svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' class='w-6 h-6 text-red-500'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M16.5 3.75a5.25 5.25 0 0 1 3.71 8.96l-7.07 7.07a.75.75 0 0 1-1.06 0l-7.07-7.07a5.25 5.25 0 1 1 7.42-7.42l.42.42.42-.42a5.25 5.25 0 0 1 3.63-1.54Z'/></svg>`;
  });
  card.appendChild(favBtn);

  const img = document.createElement("img");
  img.src = image;
  img.alt = title;
  img.className = "w-full h-48 object-cover";
  card.appendChild(img);

  const content = document.createElement("div");
  content.className = "p-4 flex flex-col flex-1";

  const titleElement = document.createElement("h3");
  titleElement.textContent = title;
  titleElement.className =
    "text-lg font-semibold text-primary mb-2 text-center";
  content.appendChild(titleElement);

  const descElement = document.createElement("p");
  descElement.textContent = description;
  descElement.className = "text-gray-600 text-sm text-center";
  content.appendChild(descElement);

  card.appendChild(content);

  return card;
}
