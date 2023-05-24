export const navBar = () => {
  return `
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">News Reader</a>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" data-category="headlines" href="#">Headlines</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-category="business" href="#">Business</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-category="entertainment" href="#">Entertainment</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-category="health" href="#">Health</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-category="science" href="#">Science</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-category="sports" href="#">Sports</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" data-category="technology" href="#">Technology</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                id="newsQuery"
              />
              <button class="btn btn-outline-success" type="submit" id="searchBtn">Search</button>
            </form>
          </div>
        </div>
      </nav>
    `;
};
