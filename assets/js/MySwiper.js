"use ctrict";
export const Swipers = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const bunnerSwiper = new Swiper(".slider-bunner-js", {
      slidesPerView: 1,
      loop: "true",
      speed: 800,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    const swiperNew = new Swiper(".slider-js-1", {
      navigation: {
        prevEl: ".js-1-prev",
        nextEl: ".js-1-next",
      },
      slidesPerView: 1,
      loop: "true",
      speed: 800,
      spaceBetween: 10,
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1000: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
      },
    });

    const swiperFull = new Swiper(".slider-full-js", {
      slidesPerView: 1,
      loop: "true",
      speed: 800,
      pagination: {
        el: ".swiper-pagination-1",
        clickable: true,
      },
    });
    
  });
};
