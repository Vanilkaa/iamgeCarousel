import '../node_modules/modern-normalize/modern-normalize.css';
import './style.css';
import createImgCarousel from './createImgCarousel';

const imgCarouselContainer = document.querySelector('.imgCarouselContainer');
const navDots = document.querySelector('.navDots');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const slideShow = createImgCarousel(imgCarouselContainer, navDots, prevBtn, nextBtn);