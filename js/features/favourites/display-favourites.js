import createArticleListHtml from "../articles/create-article-list-html.js";
import { getFavourites } from "../../utils/favourites.js";

export default function displayFavourites() {
  const container = document.querySelector("#favourite-container");
  const favs = getFavourites();

  if (favs.length === 0) {
    container.innerHTML =
      "<div class='text-center col-span-full'>No favourites yet</div>";
    return;
  }
  container.className =
    "grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4";
  createArticleListHtml(container, favs);
}
