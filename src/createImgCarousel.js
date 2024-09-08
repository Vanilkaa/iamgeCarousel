export default function createImgCarousel(imgCarouselContainer, prevBtn, nextBtn) {
  const imgs = imgCarouselContainer.children;
  let slideIndex = 1;

  function showSlides(n) {
    if (n > imgs.length) slideIndex = 1;
    if (n < 1) slideIndex = imgs.length;
    for (let i = 0; i < imgs.length; i += 1) {
      imgs[i].style.display = 'none';
    }
    imgs[slideIndex - 1].style.display = 'block';
  }

  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  prevBtn.onclick = () => plusSlides(-1);
  nextBtn.onclick = () => plusSlides(1);
}
