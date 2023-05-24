const apiKey = "2e64f4460f804598986e2abfb41085b9";
const country = "id";
// let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=2e64f4460f804598986e2abfb41085b9`;
// Fetch news articles from API
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const articles = data.articles;
    let output = "";

    // Otomatis menampilkan data
    for (let i = 0; i < articles.length; i++) {
      output += `
        <div class="row">
          <div class="col-md-4">
            <img src="${articles[i].urlToImage}" alt="${articles[i].title}" class="img-thumbnail">
          </div>
          <div class="col-md-8">
            <h3>${articles[i].title}</h3>
            <p>${articles[i].description}</p>
            <a href="${articles[i].url}" class="btn btn-primary" target="_blank">Read More</a>
          </div>
        </div>
        <hr>
      `;
    }

    // Append output to news-container div
    $("#news-container").html(output);
  })
  .catch(function (error) {
    console.log(error);
  });

// Live search functionality
$(document).on("keyup", "#search-input", function () {
  const searchTerm = $(this).val().toLowerCase();

  // Filter articles based on search term
  const filteredArticles = data.articles.filter(function (article) {
    return (
      article.title.toLowerCase().includes(searchTerm) ||
      article.description.toLowerCase().includes(searchTerm)
    );
  });

  // otomatis megenerate content terfilter
  let output = "";
  for (let i = 0; i < filteredArticles.length; i++) {
    output += `
      <div class="row">
        <div class="col-md-4">
          <img src="${filteredArticles[i].urlToImage}" alt="${filteredArticles[i].title}" class="img-thumbnail">
        </div>
        <div class="col-md-8">
          <h3>${filteredArticles[i].title}</h3>
          <p>${filteredArticles[i].description}</p>
          <a href="${filteredArticles[i].url}" class="btn btn-primary" target="_blank">Read More</a>
        </div>
      </div>
      <hr>
    `;
  }

  // Update news-container with filtered articles
  $("#news-container").html(output);
});
