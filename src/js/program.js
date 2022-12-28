import { showDropDownList } from './drop-down-list.js';

export function program() {
  const btnFaqSimple= document.querySelectorAll('.dke_item-program__head');

  // нажатие на пункты аккордеона, разворот ответов на впопросы
  btnFaqSimple.forEach(function(element) {
    element.addEventListener('click', showDropDownList);
  })
}