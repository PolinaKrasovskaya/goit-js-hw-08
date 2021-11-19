// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');

const listImagesMarup = createListImagesMarkup(galleryItems);



function createListImagesMarkup(images) {
    return images.map(({original, preview, description}) => `
    <div class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img 
            class="gallery__image" 
            src=${preview} 
            alt=${description} 
            />
        </a>
    </div>
    `).join('');

}

galleryRef.insertAdjacentHTML('beforeend', listImagesMarup)

const lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt', 
    captionPosition: 'bottom', 
    captionDelay: 250 
});



console.log(galleryItems);
