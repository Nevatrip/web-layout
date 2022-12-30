import '../../scss/pages/sights-list.scss';

import { dropDownMenu } from '../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  new Topbar(document.querySelector('.dke_topbar'));

  // кнопка прокрутки страницы вверх
  new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
