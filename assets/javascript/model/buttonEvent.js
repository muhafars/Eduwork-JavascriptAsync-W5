import { fetchNews, displayNews, getHeadlinesUrl, getCategoryUrl } from "./fetchNews.js";

export const addEventListeners = () => {
  document.querySelectorAll(".nav-link").forEach(button => {
    button.addEventListener("click", async () => {
      const category = button.dataset.category;
      const url = category === "headlines" ? getHeadlinesUrl() : getCategoryUrl(category);
      const newsType = document.getElementById("newsType");
      newsType.innerHTML = `<h4>${button.textContent}</h4>`;
      const articles = await fetchNews(url);
      displayNews(articles);
    });
  });

  document.getElementById("searchBtn").addEventListener("click", async () => {
    const query = document.getElementById("newsQuery").value.trim();
    if (!query) return;

    const url = getSearchUrl(query);
    const newsType = document.getElementById("newsType");
    newsType.innerHTML = `<h4>Search: ${query}</h4>`;
    const articles = await fetchNews(url);
    displayNews(articles);
  });
};
