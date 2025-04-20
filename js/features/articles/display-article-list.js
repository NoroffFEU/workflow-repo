import { apiService } from "../../services/api-service.js";
import createArticleListHtml from "./create-article-list-html.js";
import { displayMessage } from "../../ui/common/displayMessage.js";
import createArticleListSkeletonHtml from "./create-article-list-skeleton-html.js";

export default async function displayArticleList() {
  const container = document.querySelector("#article-container");
  createArticleListSkeletonHtml(container);
  try {
    const articles = await apiService.getNewsArticles();
    createArticleListHtml(container, articles.data);
  } catch (error) {
    console.log(error);
    displayMessage(container, "error", error.message);
  }
}
