let swiperd = new Swiperd('.swiper', {
  direction: 'horizontal',
  loop: false,
  pagination: {
    el: '.swiper-pagination-ds',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 18,
  breakpoints: {
    768: {
      slidesPerView: 2.5,
      spaceBetween: 18,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
  autoplay: {
    delay: 1500,
  },
});
