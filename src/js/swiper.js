import Swiper from "swiper/bundle";

import "swiper/css/bundle";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 100,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  autoplay: {
    delay: 5000,
    pauseOnMouseEnter: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 100,
  //   },
  //   1279: {
  //     slidesPerView: 3,
  //     spaceBetween: 100,
  //   },
  // },
});

const swiper2 = new Swiper(".mySwiper2", {
  // loop: true,

  // autoHeight: true,

  spaceBetween: 100,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // autoplay: {
  //   delay: 5000,
  //   pauseOnMouseEnter: true,
  // },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // breakpoints: {
  //   320: {
  //     slidesPerView: 1,
  //     spaceBetween: 100,
  //   },
  //   1279: {
  //     slidesPerView: 3,
  //     spaceBetween: 100,
  //   },
  // },
});
