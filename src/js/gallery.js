import 'blueimp-gallery/js/blueimp-gallery-indicator.js';
import blueimp from 'blueimp-gallery';

import Swiper, { Navigation, Pagination } from 'swiper';

export default class Gallery {
  constructor(gallerySelector) {
    this.galleryContainer = document.querySelector(gallerySelector + ' .swiper-wrapper');
    this.swiperSelector = gallerySelector;
    this.swiperElement = document.querySelector(gallerySelector);

    if(!this.swiperElement){
      return;
    }

    if(this.galleryContainer){
      this.insertGalleryPopup();
      this.initGallery();
    }
    //Переменная где будет хранится инстанс слайдера
    this.swiper = {
      destroyed: true,
    };
    if(window.innerWidth <= 575){
      this.swiper = this.initSwiper();
    }
    window.addEventListener('resize', () => {
      this.changeVisibilitySlider();
    })
  }

  initGallery(){
    this.galleryContainer.onclick = function (event) {
      event = event || window.event
      const target = event.target || event.srcElement
      const link = target.src ? target.parentNode : target
      const options = { 
        index: link, 
        event: event,
      }
      const links = this.getElementsByTagName('a');
      if(window.innerWidth > 575){
        blueimp(links, options)
      }else{
        event.preventDefault();
      }
    }
  }

  insertGalleryPopup(){
    // Попап галереи
    const galleryPopup = `
      <div id="blueimp-gallery" class="blueimp-gallery blueimp-gallery-controls" data-use-bootstrap-modal="false">
        <div class="slides"></div>
        <h3 class="title"></h3>
        <a class="prev"></a>
        <a class="next"></a>
        <a class="close"></a>
        <a class="play-pause"></a>
        <ol class="indicator"></ol>
      </div>
    `;
    this.swiperElement.insertAdjacentHTML('afterend', galleryPopup);
  }

  initSwiper(){
    const swiperImages = Array.from(document.querySelectorAll(this.swiperSelector + ' .swiper-slide img')).map(el => el.getAttribute('src'));
    
    const swiperOptions = {
      loop: true,
      modules: [Navigation, Pagination],
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<span class="dot swiper-pagination-bullet dke_swiper-bullet" style="background-image: url(${swiperImages[index]});"></span>`;
        },
      },
    
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    };

    return new Swiper(this.swiperSelector, swiperOptions);
  }

  changeVisibilitySlider(){
    if(window.innerWidth <= 575 && this.swiper.destroyed){
      this.swiper = this.initSwiper();
    }else if(window.innerWidth > 575 && this.swiper.destroy){
      this.swiper.destroy();
    }
  }
}