import '../../scss/pages/nevatrip-ru.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import Navbar from '../../js/navbar.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';
import Gallery from '../../js/gallery.js';
import liveNotify from '../../js/live-notify.js';

new Topbar(document.querySelector('.dke_topbar'));


function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  //Инициализация слайдера и попапа галереи
  new Gallery('#dke_gallery', '#dke_slider-items', '#blueimp-gallery-carousel');

  //Инициализация попапа уведомления
  new liveNotify('#dke_live-notify');
  
  // кнопка прокрутки страницы вверх
  new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
