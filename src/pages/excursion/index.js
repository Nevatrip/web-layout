import '../../scss/pages/excursion.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import Modal from '../../js/modal.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  new Topbar(document.querySelector('.dke_topbar'));
  const remindModal = new Modal(document.querySelector('.dke_modal'));

  const remindButton = document.querySelector('[data-role="remind-button"]');
  remindButton.addEventListener('click', () => {
    remindModal.openModal();
  });

  // кнопка прокрутки страницы вверх
  // new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
