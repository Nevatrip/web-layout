import '../../scss/pages/nevatrip-ru.scss';
import { dropDownMenu } from './../../js/drop-down-menu/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import Navbar from '../../js/navbar.js';
import ButtonScrollTop from '../../js/button-scroll-top.js';

new Topbar(document.querySelector('.dke_topbar'));
new Navbar(document.querySelector('.dke_navbar'));

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  // кнопка прокрутки страницы вверх
  new ButtonScrollTop('.dke_button-scroll-top');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
