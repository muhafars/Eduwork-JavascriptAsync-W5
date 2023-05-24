const apiKey = "2e64f4460f804598986e2abfb41085b9";
const country = "us";
let url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`;
// const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
function fetchNews() {
  return fetch(url)
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

      return output;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function liveSearch() {
  $(document).on("keyup", "#search-input", function () {
    const searchTerm = $(this).val().toLowerCase();

    fetchNews().then(output => {
      // Convert output to an array
      const outputArray = Object.values(output);

      const filteredArticles = outputArray.filter(function (article) {
        return (
          article.title.toLowerCase().includes(searchTerm) ||
          article.description.toLowerCase().includes(searchTerm)
          //   article.title.includes(searchTerm) ||
          //   article.description.includes(searchTerm)
        );
      });

      let filteredOutput = "";
      for (let i = 0; i < filteredArticles.length; i++) {
        filteredOutput += `
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

      $("#news-container").html(filteredOutput);
    });
  });
}

export { fetchNews, liveSearch };
