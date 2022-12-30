import { showDropDownList } from './drop-down-list.js';

export function faqSimple() {
  const btnsFaqSimple= document.querySelectorAll('.dke_item-faq-simple__head');

  // нажатие на пункты аккордеона, разворот ответов на впопросы
  btnsFaqSimple.forEach(function(element) {
    element.addEventListener('click', showDropDownList);
  })
}