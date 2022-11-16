let serviceListWrapper = document.querySelector('.services__list-wrapper');
let serviceList = serviceListWrapper.querySelector('.services__list');
let serviceListSlides = serviceList.querySelectorAll('.services__list-slide');

let expander = serviceListWrapper.querySelector('.services__list-expander');
let expanderCheckbox = expander.querySelector('input');
expanderCheckbox.addEventListener('input', (evt) => {
  if (evt.currentTarget.checked) {
    serviceList.classList.add('services__list--expanded');
    expander.lastChild.textContent = 'Скрыть';
  } else {
    serviceList.classList.remove('services__list--expanded');
    expander.lastChild.textContent = 'Показать всё';
  }
});

let init = false;
let swiper;

function swiperCard() {
  if (window.innerWidth <= 320) {
    if (!init) {
      serviceListWrapper.classList.remove('services__list-wrapper');
      serviceListWrapper.classList.add('swiper');

      serviceList.classList.remove('services__list');
      serviceList.classList.add('swiper-wrapper');

      for (let serviceListSlide of serviceListSlides) {
        serviceListSlide.classList.remove('services__list-slide');
        serviceListSlide.classList.add('swiper-slide');
      }

      swiper = new Swiper(".swiper", {
        direction: "horizontal",
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 32,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
      init = true;
    }
  } else if (init) {
    serviceListWrapper.classList.remove('swiper');
    serviceListWrapper.classList.add('services__list-wrapper');

    serviceList.classList.remove('swiper-wrapper');
    serviceList.classList.add('services__list');

    for (let serviceListSlide of serviceListSlides) {
      serviceListSlide.classList.remove('swiper-slide');
      serviceListSlide.classList.add('services__list-slide');
    }

    swiper.destroy();
    init = false;
  }
}

swiperCard();
window.addEventListener("resize", swiperCard);