import '../../scss/pages/nevatrip-ru.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import Navbar from '../../js/navbar.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';
import gallery from '../../js/gallery.js';

new Topbar(document.querySelector('.dke_topbar'));

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  gallery();
  // кнопка прокрутки страницы вверх
  // new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
