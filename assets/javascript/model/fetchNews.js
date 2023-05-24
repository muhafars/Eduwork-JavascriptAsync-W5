const API_KEY = "2e64f4460f804598986e2abfb41085b9";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const CATEGORY_NEWS = "https://newsapi.org/v2/top-headlines?country=us&category=";

export const fetchNews = async url => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.articles;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export const getHeadlinesUrl = () => {
  return HEADLINES_NEWS + API_KEY;
};

export const getCategoryUrl = category => {
  return CATEGORY_NEWS + category + "&apiKey=" + API_KEY;
};

export const getSearchUrl = query => {
  return `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&apiKey=${API_KEY}`;
};
