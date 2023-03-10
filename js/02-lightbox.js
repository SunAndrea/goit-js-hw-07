import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(`.gallery`);

function createGalleryItemsMurkup(items) {
  return items
    .map(
      (item) =>
        `<a class="gallery__item"
         href="${item.original}"
         >
  <img class="gallery__image"
   src="${item.preview}"
    alt="${item.description}" />
</a>`
    )
    .join("");
}
const galleryItemsMurkup = createGalleryItemsMurkup(galleryItems);
galleryEl.innerHTML = galleryItemsMurkup;

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: `alt`,
  scrollZoomFactor: 0.1,
  captionDelay: 250,
});
