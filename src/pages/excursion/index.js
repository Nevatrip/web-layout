import '../../scss/pages/excursion.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import { sightList } from './../../js/sight-list.js';
import { faq } from './../../js/faq.js';
import Modal from '../../js/modal.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';
import Gallery from '../../js/gallery.js';
import LiveNotify from '../../js/live-notify.js';


function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  new Topbar(document.querySelector('.dke_topbar'));
  const remindModal = new Modal(document.querySelector('.dke_modal'));

  const remindButton = document.querySelector('[data-role="remind-button"]');
  remindButton.addEventListener('click', () => {
    remindModal.openModal();
  });

  // список достопримечательностей
  sightList();

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
