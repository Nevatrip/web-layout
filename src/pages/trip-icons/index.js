import '../../scss/pages/trip-icons.scss';

import '../../icons/boat.sprite.svg';
import '../../icons/anchor.sprite.svg';
import '../../icons/lifebuoy.sprite.svg';
import '../../icons/ticket.sprite.svg';
import '../../icons/star.sprite.svg';

function ready() {
  console.log('loaded');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
