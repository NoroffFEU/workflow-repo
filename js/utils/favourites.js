const FAVOURITES_KEY = "favourites";

export function getFavourites() {
  return JSON.parse(localStorage.getItem(FAVOURITES_KEY) || "[]");
}

export function isFavourite(id) {
  return getFavourites().some((a) => a.id === id);
}

export function toggleFavourite(id, article) {
  let favs = getFavourites();
  if (isFavourite(id)) {
    favs = favs.filter((a) => a.id !== id);
  } else {
    favs.push(article);
  }
  localStorage.setItem(FAVOURITES_KEY, JSON.stringify(favs));
}
