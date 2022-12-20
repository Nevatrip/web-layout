import '../../scss/pages/excursion.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';

new Topbar(document.querySelector('.dke_topbar'));

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  // кнопка прокрутки страницы вверх
  // new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
