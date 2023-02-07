import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);

const galleryObj = galleryItems
  .map(
    (item) => `<a class="gallery__item" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
    </a>`
  )
  .join("");
gallery.insertAdjacentHTML("beforeend", galleryObj);

const photoOpen = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: `alt`,
    captionDelay: 250,
  });
  return;
};

gallery.addEventListener(`click`, photoOpen);
