import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(`.gallery`);

function createGalleryItemsMurkup(items) {
  return items
    .map(
      (item) =>
        `<div class = "gallery__item">
    <a class = "gallery__link" href = "${item.original}">
    <img
     class = "gallery__image"
     src = "${item.preview}"
    data-source = "${item.original}"
    alt= "${item.description}"/>
    </a>
    </div>`
    )
    .join("");
}
const galleryItemsMurkup = createGalleryItemsMurkup(galleryItems);
galleryEl.innerHTML = galleryItemsMurkup;

function onImgClick(event) {
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src = "${event.target.dataset.source}">
`);

  instance.show();
}
galleryEl.addEventListener("keydown", function (event) {
  if (event.code === "Escape") {
    instance.close();
  }
});
galleryEl.addEventListener("click", onImgClick);
