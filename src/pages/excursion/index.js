import '../../scss/pages/nevatrip-ru.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import Navbar from '../../js/navbar.js';
import { sightList } from './../../js/sight-list.js';
import { faq } from './../../js/faq.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';

new Topbar(document.querySelector('.dke_topbar'));

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  // список достопримечательностей
  sightList();

  // блок FAQ
  faq();

  // кнопка прокрутки страницы вверх
  // new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
