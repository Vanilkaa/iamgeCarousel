import '../node_modules/modern-normalize/modern-normalize.css';
import './style.css';
import createImgCarousel from './createImgCarousel';

const imgCarouselContainer = document.querySelector('.imgCarouselContainer');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

createImgCarousel(imgCarouselContainer, prevBtn, nextBtn);
