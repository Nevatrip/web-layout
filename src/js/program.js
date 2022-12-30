import { showDropDownList } from './drop-down-list.js';

export function program() {
  const btnsFaqSimple= document.querySelectorAll('.dke_item-program__head');

  // нажатие на пункты аккордеона, разворот ответов на впопросы
  btnsFaqSimple.forEach(function(element) {
    element.addEventListener('click', showDropDownList);
  })
}