import displayArticleList from "./features/articles/display-article-list.js";
import displayFavourites from "./features/favourites/display-favourites.js";
import displayArticle from "./features/articles/display-article.js";
import handleContactForm from "./features/contact/handle-contact-form.js";

function initializeApp() {
  const path = window.location.pathname;
  console.log(path);

  switch (path) {
    case "/":
    case "/index.html":
      displayArticleList();
      break;
    case "/article.html":
      displayArticle();
      break;
    case "/favourites.html":
      displayFavourites();
      break;
    case "/contact.html":
      handleContactForm();
      break;
    default:
      break;
  }
}

initializeApp();
