// import
import { navBar } from "./model/navBar.js";
import { footer } from "./model/footer.js";
import { newsCard } from "./model/newsCard.js";
//Navbar
// Insert navbar HTML into the DOM
const navbarContainer = document.getElementById("navBar");
if (navbarContainer) {
  navbarContainer.innerHTML = navBar();
}

const footerContainer = document.getElementById("footer");
if (footerContainer) {
  footerContainer.innerHTML = footer();
}
// Variables
const newsType = document.getElementById("newsType");
const newsDetails = document.getElementById("newsDetails");

if (!newsType || !newsDetails) {
  console.error("Required elements not found!");
}

// APIs
const API_KEY = "2e64f4460f804598986e2abfb41085b9";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const CATEGORY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=";

// Functions to fetch and display news
const fetchNews = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};

const displayNews = articles => {
  if (!newsDetails) {
    console.error("Required element not found!");
    return;
  }

  if (articles.length === 0) {
    newsDetails.innerHTML = "<h5>No news found.</h5>";
    return;
  }

  newsDetails.innerHTML = "";

  articles.forEach(article => {
    const { title, urlToImage, description, publishedAt, url } = article;
    const card = newsCard(title, urlToImage, description, publishedAt, url);
    newsDetails.insertAdjacentHTML("beforeend", card);
  });
};

// Event listeners for buttons
document.querySelectorAll(".nav-link").forEach(button => {
  button.addEventListener("click", async () => {
    const category = button.dataset.category;
    const url =
      category === "headlines"
        ? HEADLINES_NEWS + API_KEY
        : CATEGORY_NEWS + category + "&apiKey=" + API_KEY;
    newsType.innerHTML = `<h4>${button.textContent}</h4>`;
    const articles = await fetchNews(url);
    displayNews(articles);
  });
});

// Search button event listener
document.getElementById("searchBtn").addEventListener("click", async () => {
  const query = document.getElementById("newsQuery").value.trim();
  if (!query) return;

  const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`;
  newsType.innerHTML = `<h4>Search: ${query}</h4>`;
  const articles = await fetchNews(url);
  displayNews(articles);
});

// Fetch headlines on page load
window.addEventListener("load", async () => {
  const articles = await fetchNews(HEADLINES_NEWS + API_KEY);
  displayNews(articles);
});
