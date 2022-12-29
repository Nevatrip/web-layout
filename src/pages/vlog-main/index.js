import '../../scss/pages/vlog-main.scss';
import Modal from '../../js/modal.js';


import { dropDownMenu } from './../../js/drop-down-menu.js';
import Topbar from '../../js/topbar.js';

new Topbar(document.querySelector('.dke_topbar'));

function ready() {
  // выпадающее меню (desktop), бургер-меню (mobile)
  dropDownMenu();

  // Модальные окна влога
  const vlogModals = document.querySelectorAll('[data-vlog-modal]');
  vlogModals.forEach(modal => {
    const modalId = modal.dataset.vlogModal;
    const modalInstance = new Modal(modal);

    const modalOpenButtons = document.querySelectorAll(`[data-modal-open="${modalId}"]`);
    modalOpenButtons.forEach(button => {
      button.addEventListener('click', (e)=> {
        e.preventDefault();
        modalInstance.openModal();
      })
    })
    
  });
}

function load() {
  document.body.classList.remove('preload');
}

window.addEventListener('load', load);

document.addEventListener('DOMContentLoaded', ready);
