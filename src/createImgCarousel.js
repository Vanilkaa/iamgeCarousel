export default function createImgCarousel(imgCarouselContainer, navDots, prevBtn, nextBtn) {
  const imgs = Array.from(imgCarouselContainer.children);
  const dots = Array.from(navDots.children);
  let slideIndex = 1;

  function showSlides(n) {
    if (n > imgs.length) slideIndex = 1;
    if (n < 1) slideIndex = imgs.length;

    imgs.forEach((e) => e.style.display = 'none');
    dots.forEach((e) => e.className = e.className.replace(' active', ''));

    imgs[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += ' active';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  prevBtn.onclick = () => plusSlides(-1);
  nextBtn.onclick = () => plusSlides(1);

  dots.forEach((e, i) => e.onclick = () => currentSlide(i + 1));

  setInterval(() => plusSlides(1), 5000);
}
