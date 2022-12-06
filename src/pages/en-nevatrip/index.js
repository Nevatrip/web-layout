import '../../scss/pages/en-nevatrip.scss';

import { dropDownMenu } from './../../js/drop-down-menu/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import Navbar from '../../js/navbar.js';

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();
}

function load() {
  document.body.classList.remove('preload');
  new Topbar(document.querySelector('.dke_topbar'));
  new Navbar(document.querySelector('.dke_navbar'));
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
