import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgCardMarkup = createImgCardMarkup(galleryItems);

function createImgCardMarkup(galleryItems){return galleryItems.map(({preview, original, description}) => {
    return `<div class="gallery__item"><a class="gallery__link" href = "${original}">
    <img 
        class="gallery__image"
        src="${preview}" 
        alt = "${description}"
        width = "340"></img></a></div>`
    }).join("")};

galleryEl.insertAdjacentHTML("afterbegin", imgCardMarkup);

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: "alt",
    captionDelay: 250,
});