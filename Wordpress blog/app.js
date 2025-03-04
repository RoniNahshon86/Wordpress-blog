function getNewArticles(category = "all") {
  const api = "https://67c6ed2ec19eb8753e77f0d1.mockapi.io/blog/articles";
  const blog = document.querySelector(".blog");

  blog.innerHTML = "";

  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      if (category !== "all") {
        data = data.filter((article) => article.category === category);
      }
      data.forEach((article) => {
        blog.innerHTML += `<div class="blog-article">
          <img src="${article.banner}"/>
          <h1>${article.title}</h1>
          <p>${article.category}</p>
          </div>`;
      });
    });
}

function addFilters() {
  const all = document.getElementById("all");
  const builders = document.getElementById("builders");
  const plugins = document.getElementById("plugins");
  const wordpressNews = document.getElementById("wordpress-news");
  const themes = document.getElementById("themes");
  const security = document.getElementById("security");
  const tutorials = document.getElementById("tutorials");

  all.addEventListener("click", () => {
    getNewArticles();
  });

  builders.addEventListener("click", () => {
    getNewArticles("Builders");
  });

  plugins.addEventListener("click", () => {
    getNewArticles("Plugins");
  });

  wordpressNews.addEventListener("Wordpress News", () => {
    getNewArticles("Army");
  });

  themes.addEventListener("click", () => {
    getNewArticles("Themes");
  });

  security.addEventListener("click", () => {
    getNewArticles("Security");
  });

  tutorials.addEventListener("click", () => {
    getNewArticles("Tutorials");
  });
}

getNewArticles();
addFilters();
