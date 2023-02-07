import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(`.gallery`);
const galleryList = document.createElement(`ul`);
galleryList.classList.add(`gallery`);
gallery.append(galleryList);

const galleryObg = galleryItems
  .map(
    (item) => `
      <div class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
    />
  </a>
</div>`
  )
  .join("");
galleryList.insertAdjacentHTML("beforeend", galleryObg);

const photoOpen = (event) => {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const fullSize = event.target.closest(`.gallery__link`).getAttribute(`href`);
  console.log(fullSize);
  basicLightbox
    .create(
      `
		<img src= ${fullSize}>
	`
    )
    .show();

  return;
};
galleryList.addEventListener(`click`, photoOpen);
