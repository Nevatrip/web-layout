import '../../scss/pages/vlog-main.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';

new Topbar(document.querySelector('.dke_topbar'));

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
