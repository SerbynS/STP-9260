import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function initGallery() {
  new Swiper('.swiper-gallery', {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      enabled: true,
    },
    a11y: false,
    keyboard: { enabled: true },
    slidesPerView: 1,
    // autoHeight: true,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
      clickable: true,
      bulletActiveClass: 'test',
    },
    on: {
      init: function () {
        let bullets = document.querySelectorAll('.swiper-pagination-bullet');

        bullets.forEach(bullet => {
          bullet.style.transform = 'scale(1)';
        });
      },
      slideChange: function () {
        let bullets = document.querySelectorAll('.swiper-pagination-bullet');

        // Визначаємо поточний відступ в залежності від ширини вікна
        let offset = 0;
        const width = window.innerWidth;

        if (width <= 321) {
          offset = 24;
        } else if (width >= 1200) {
          offset = 28;
        } else {
          offset = 0; // або інше значення за замовчуванням
        }

        if (this.realIndex === 2 || this.realIndex === 3) {
          bullets.forEach(bullet => {
            bullet.style.transform = `translateX(-${offset}px)`;
          });
        } else {
          bullets.forEach(bullet => {
            bullet.style.transform = 'none';
          });
        }
      },
    },
  });
}
