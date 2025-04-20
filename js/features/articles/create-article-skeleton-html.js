export default function createArticleSkeletonHtml(container) {
  container.innerHTML = `
    <article class="max-w-2xl mx-auto bg-white rounded-lg shadow p-6 flex flex-col gap-6 animate-pulse">
      <div class="w-full h-64 bg-gray-200 rounded"></div>
      <div class="h-10 bg-gray-200 rounded w-3/4 mx-auto"></div>
      <div class="h-6 bg-gray-100 rounded w-5/6 mx-auto"></div>
    </article>
  `;
}
