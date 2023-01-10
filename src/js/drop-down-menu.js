import { toggleAttr } from './utils.js';
import { showDropDownList } from './drop-down-list.js';

const btnTopHeader = document.querySelector('#btn-drop-down-menu');
const btnNavbar = document.querySelector('#btn-header-burger');

let isOpenMenu = false;

export function dropDownMenu() {
  const itemsDropDownMenu = document.querySelectorAll('.dke_item-drop-down');
  const itemsDropDownMenuMobile = document.querySelectorAll('.dke_item-drop-down-mobile');
  
  // нажатие на бургер-кнопку блока topbar для открытия/закртия меню
  btnTopHeader?.addEventListener('click', showMenu);

  // нажатие на бургер-кнопку блока navbar для открытия/закртия меню
  btnNavbar?.addEventListener('click', showMenu);

  // открытие/закрытие внутренних списков меню на desktop
  itemsDropDownMenu?.forEach(element => {
    const btn = element.querySelector('.dke_item-drop-down__btn');

    btn?.addEventListener('click', showDropDownList);
  });

  // открытие/закрытие внутренних списков бургер-меню
  itemsDropDownMenuMobile?.forEach(element => {
    const btn = element.querySelector('.dke_item-drop-down-mobile__head');

    btn?.addEventListener('click', showDropDownList);
  });
}

window.addEventListener('resize', () => {
  if (isOpenMenu) {
    setTopMobileMenu();

    // если бургер-кнопок нет или они скрыты, закрывать меню
    if (
      !btnTopHeader &&
      (!btnNavbar || getComputedStyle(btnNavbar, null).display === 'none')
    )
    showMenu();
  }
});

// открытие/закртие меню
function showMenu() {
  if (this) this.disabled = true;

  isOpenMenu = !isOpenMenu;

  setTopMobileMenu();
  
  document.body.classList.toggle('js_dke_active-menu');
  
  [btnTopHeader, btnNavbar].forEach(function (element) {
    if (element) {
      toggleAttr(element, 'aria-expanded');
      element.classList.toggle('dke_burger__icon_active');
    }
  });

  if (this) this.disabled = false;
}

// меняем положение мобильного меню (по вертикали) в зависимости от высоты navbar
function setTopMobileMenu() {
  const navbar = document.querySelector('.dke_navbar');
  const mobileMenu = document.querySelector('.dke_menu-mobile');

  if (navbar && mobileMenu) {
    const bottomHeight = navbar.getBoundingClientRect()?.bottom;
    mobileMenu.style.top = bottomHeight + 'px';
  }
}