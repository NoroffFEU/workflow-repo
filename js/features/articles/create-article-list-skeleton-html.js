export default function createArticleListSkeletonHtml(container, count = 4) {
  container.className =
    "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";

  for (let i = 0; i < count; i++) {
    const card = document.createElement("div");
    card.href = "#";
    card.className =
      "block w-full bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 max-w-sm mx-auto flex flex-col h-full animate-pulse";
    card.style.textDecoration = "none";

    card.innerHTML = `
      <div class="w-full h-48 bg-gray-300"></div>
      <div class="p-4 flex flex-col flex-1">
        <div class="h-6 bg-gray-300 rounded w-3/4 mb-2 mx-auto"></div>
        <div class="h-4 bg-gray-200 rounded w-5/6 mx-auto"></div>
      </div>
    `;

    container.appendChild(card);
  }

  return container;
}
