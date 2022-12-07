import { toggleAttr } from "../utils.js"

const TIME = 3000;

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
  if (isOpenMenu) {
    const navbar = document.querySelector(".dke_navbar");
    const mobileMenu = document.querySelector(".dke_menu-mobile");
    
    if (navbar && mobileMenu) {
      // меняем положение мобильного меню взависимсоти от высоты navbar
      const bottomHeight = navbar.getBoundingClientRect()?.bottom;
      mobileMenu.style.top = bottomHeight + "px";
    }
  }
});

// открытие/закртие меню
function showMenu() {
  const dropDownMenu = document.querySelector(".dke_drop-down-navbar");
  const navbar = document.querySelector(".dke_navbar");
  const mobileMenu = document.querySelector(".dke_menu-mobile");

  this.disabled = true;

  isOpenMenu = !isOpenMenu;

  toggleAttr(this, "aria-expanded");

  if (dropDownMenu)
    if (dropDownMenu.style.overflowY) dropDownMenu.style.overflowY = null;
    else setTimeout(e => {
      dropDownMenu.style.overflowY = "auto";
    }, TIME);

  if (navbar && mobileMenu) {
    const bottomHeight = navbar.getBoundingClientRect()?.bottom;
    mobileMenu.style.top = bottomHeight + "px";
  }

  document.body.classList.toggle("_active-menu");
  
  this.disabled = false;
}

// открытие/закртие выпадающих списков
function showSublist(element) {
  this.disabled = true;
  element.classList.toggle("_active");

  const dropDownSublist = this?.nextElementSibling;

  if (element) toggleAttr(element, "aria-expanded");
    
  if (dropDownSublist)
    if (dropDownSublist.style.overflowY) dropDownSublist.style.overflowY = null;
    else setTimeout(e => {
      dropDownSublist.style.overflowY = "auto";
    }, TIME);

  this.disabled = false;
}