const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1, // Мобільний
  spaceBetween: 20,
  loop: true,

  breakpoints: {
    1250: { slidesPerView: 3 }, // Десктоп
    880: { slidesPerView: 2 }, // Планшет
  },

  pagination: {
    el: ".pagination",
    bulletClass: "pagination__button",
    bulletActiveClass: "pagination__button--active",
  },

  navigation: {
    nextEl: ".carousel-button.next",
    prevEl: ".carousel-button.prev",
  },
});
