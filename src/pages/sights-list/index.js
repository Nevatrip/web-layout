import '../../scss/pages/sights-list.scss';

import { dropDownMenu } from '../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  new Topbar(document.querySelector('.dke_topbar'));

  // блок FAQ
  faq();

  //Инициализация слайдера и попапа галереи
  new Gallery('#dke_gallery', '#dke_slider-items', '#blueimp-gallery-carousel');

  //Инициализация попапа уведомления
  new LiveNotify('#dke_live-notify');

  // кнопка прокрутки страницы вверх
  new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
