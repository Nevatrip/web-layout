import '../../scss/pages/home.scss';

function ready() {
  console.log('loaded');
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
