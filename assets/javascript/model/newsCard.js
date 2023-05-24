export const newsCard = (title, urlToImage, description, publishedAt, url) => {
  const date = publishedAt.split("T")[0];

  return `
      <div class="container-fluid">
        <div class="card ">
          <img class="card-img-top" src="${urlToImage}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="text-muted">${description}</p>
            <a href="${url}" target="_blank" class="btn btn-primary">Read more</a>
            <h6 class="card-footer text-center text-body-secondary">${date}</h6>
          </div>
        </div>
      </div>
    `;
};
