import { toggleAttr } from "./utils.js"

const menuLinksBtn = document.querySelector(".dke_html-excursion__btn");
const menuLinksList = document.querySelector(".dke_html-excursion__list-wrapper");

export function attractionList() {
  // открытие/закрытие списка с достопримечательностями
  menuLinksBtn?.addEventListener("click", showList);
}

// открытие/закртие меню
function showList() {
  menuLinksBtn.disabled = true;

  menuLinksBtn.classList.toggle("_active")
  menuLinksList.classList.toggle("_active")

  menuLinksBtn.disabled = false;
}
