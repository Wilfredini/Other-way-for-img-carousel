// Select all slides
const slides = document.querySelectorAll(".slide");

slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});
let currentSlide = 0;

const nextlide = document.querySelector(".nextSlide");
const maxSlide = slides.length - 1;

nextlide.addEventListener("click", function () {
  if (currentSlide === maxSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  slides.forEach((slides, indx) => {
    slides.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});

prevSlide.addEventListener("click", function () {
  if (currentSlide === 0) {
    currentSlide = maxSlide;
  } else {
    currentSlide--;
  }

  slides.forEach((slides, indx) => {
    slides.style.transform = `translateX(${100 * (indx - currentSlide)}%)`;
  });
});
