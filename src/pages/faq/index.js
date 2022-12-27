import '../../scss/pages/faq.scss';

import '../../icons/boat.sprite.svg';
import '../../icons/anchor.sprite.svg';
import '../../icons/lifebuoy.sprite.svg';
import '../../icons/ticket.sprite.svg';
import '../../icons/star.sprite.svg';

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
