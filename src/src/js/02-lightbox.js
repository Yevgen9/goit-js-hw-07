import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
const cardsMurkup = createImageCardsMurkup(galleryItems);

galleryRef.insertAdjacentHTML("beforeend", cardsMurkup);

function createImageCardsMurkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join("");
}

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
