import { toggleAttr } from "./utils.js"

let isOpenMenu = false;

export function dropDownMenu() {
  const btnTopHeader = document.querySelector("#btn-drop-down-menu");
  const btnNavbar = document.querySelector("#btn-header-burger");
  const itemsDropDownMenu = document.querySelectorAll(".dke_item-drop-down");
  const itemsDropDownMenuMobile = document.querySelectorAll(".dke_item-drop-down-mobile");
  
  // нажатие на кнопку блока topbar для открытия/закртия меню
  btnTopHeader?.addEventListener("click", showMenu);

  // нажатие на кнопку блока navbar для открытия/закртия меню
  btnNavbar?.addEventListener("click", showMenu);

  // открытие/закрытие внутренних списков меню на desktop
  itemsDropDownMenu?.forEach(element => {
    const btn = element.querySelector(".dke_item-drop-down__btn");

    btn?.addEventListener("click", function() { showSublist.call(this, element)} );
  });

  // открытие/закрытие внутренних списков бургер-меню
  itemsDropDownMenuMobile?.forEach(element => {
    const btn = element.querySelector(".dke_item-drop-down-mobile__head");

    btn?.addEventListener("click", function() { showSublist.call(this, element) });
  });
}

window.addEventListener('resize', () => {    
  if (isOpenMenu) setTopMobileMenu();
});

// открытие/закртие меню
function showMenu() {
  this.classList.add("_disabled");

  isOpenMenu = !isOpenMenu;

  toggleAttr(this, "aria-expanded");
  setTopMobileMenu();
  document.body.classList.toggle("_active-menu");
  
  this.classList.remove("_disabled");
}

// открытие/закртие выпадающих списков
function showSublist(element) {
  this.classList.add("_disabled");
  
  if (element) {
    element.classList.toggle("_active");
    toggleAttr(element, "aria-expanded");
  }
    
  this.classList.remove("_disabled");
}

// меняем положение мобильного меню (по вертикали) в зависимости от высоты navbar
function setTopMobileMenu() {
  const navbar = document.querySelector(".dke_navbar");
  const mobileMenu = document.querySelector(".dke_menu-mobile");

  if (navbar && mobileMenu) {
    const bottomHeight = navbar.getBoundingClientRect()?.bottom;
    mobileMenu.style.top = bottomHeight + "px";
  }
}