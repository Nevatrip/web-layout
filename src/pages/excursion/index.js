import '../../scss/pages/excursion.scss';

import '../../icons/boat.sprite.svg';
import '../../icons/anchor.sprite.svg';
import '../../icons/lifebuoy.sprite.svg';
import '../../icons/ticket.sprite.svg';
import '../../icons/star.sprite.svg';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import { sightList } from './../../js/sight-list.js';
import { faq } from './../../js/faq.js';
import { faqSimple } from './../../js/faq-simple.js';
import { program } from './../../js/program.js';
import { cruiseMenu } from './../../js/cruise-menu.js';
import Modal from '../../js/modal.js';
import dropDownElement from '../../js/drop-down-element.js';
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

  new dropDownElement(
    document.querySelector('.dke_drop-down-price'),
    document.querySelector('.dke_tour-feature__prices-button'),
    'js_dke_active',
    null
  );

  // список достопримечательностей
  sightList();

  // блок FAQ
  faq();  

  // упрощенный блок FAQ
  faqSimple();
  
  // блок с программой мероприятия
  program();

  // навигационное меню экскурсии
  cruiseMenu();

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
