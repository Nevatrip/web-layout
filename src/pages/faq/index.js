import '../../scss/pages/faq.scss';

import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';
import { sightList } from './../../js/sight-list.js';
import { faq } from './../../js/faq.js';


function ready() {
  new Topbar(document.querySelector('.dke_topbar'));

  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  // список достопримечательностей
  sightList();

  // блок FAQ
  faq();
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
