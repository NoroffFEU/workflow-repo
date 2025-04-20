import { apiService } from "../../services/api-service.js";
import { getQueryParam } from "../../utils/getQueryParam.js";
import createArticleSkeletonHtml from "./create-article-skeleton-html.js";

export default async function displayArticle() {
  const id = getQueryParam("id");
  const container = document.getElementById("article-container");
  if (!id) {
    container.innerHTML = `<div class='text-center text-red-500'>No article ID provided.</div>`;
    return;
  }
  createArticleSkeletonHtml(container);
  try {
    const res = await apiService.getNewsArticleById(id);
    const { title, image, description } = res.data;
    container.innerHTML = `
      <article class="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 flex flex-col gap-6">
        <img src="${image}" alt="${title}" class="w-full h-64 object-cover rounded" />
        <h1 class="text-3xl font-bold text-center">${title}</h1>
        <p class="text-gray-700 text-lg text-center">${description}</p>
      </article>
    `;
  } catch (error) {
    container.innerHTML = `<div class='text-center text-red-500'>Article not found.</div>`;
  }
}
