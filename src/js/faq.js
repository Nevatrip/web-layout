import { showDropDownList } from "./drop-down-list.js";

const conntrolBtns = document.querySelectorAll(".dke_item-tabs-faq");
const btnsTab = document.querySelectorAll(".dke_item-tab-faq__head");
const tabsFaq = document.querySelectorAll(".dke_content-tab-faq");

let currentOpenedTab = 0;

export function faq() {
  // нажатие на кнопки для переключения табов
  conntrolBtns.forEach(function(element, index) {
    element.addEventListener("click", function() { showTab.call(this, index); });
  });

  // нажатие на пункты табов, разворот ответов на впопросы
  btnsTab.forEach(function(element) {
    element.addEventListener("click", showDropDownList);
  });
}

// переключение табов
function showTab(index) {
  this.disabled = true;

  closeTab(conntrolBtns, tabsFaq, currentOpenedTab);
  currentOpenedTab = index;

  this.classList.add("_active");
  this.firstElementChild.setAttribute("aria-selected", true);
  tabsFaq[index].classList.add("_active");

  this.disabled = false;
};

// закрытие открытого таба
function closeTab() {
  conntrolBtns[currentOpenedTab].classList.remove("_active");
  conntrolBtns[currentOpenedTab].firstElementChild.setAttribute("aria-selected", false);
  tabsFaq[currentOpenedTab].classList.remove("_active");
}

