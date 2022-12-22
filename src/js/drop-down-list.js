import { toggleAttr } from "./utils.js";

// открытие/закртие выпадающих списков
export function showDropDownList() {
  if (this) this.disabled = true;

  const parentElement = this.parentElement;
  const dropDownContent = parentElement.querySelector("[data-role=drop-down]");
  const childBlock = dropDownContent.firstElementChild;

  parentElement.classList.toggle("_active");
  [dropDownContent, childBlock].forEach(setMaxHeight);
  updateAriaExpanded(parentElement);
    
  if (this) this.disabled = false;
}

// установка максимально допустимой высоты
function setMaxHeight(element) {
  if (element) {
    if (element.style.maxHeight) element.style.maxHeight = null;
    else element.style.maxHeight = element.scrollHeight * 1.5 + 'px';
  }
}

// поиск элемента с атрибутом aria-expanded и изменение его значения
function updateAriaExpanded(parentElement) {
  if (parentElement.hasAttribute("aria-expanded"))
    toggleAttr(parentElement, "aria-expanded");
  else {
    const elementAriaAttr = parentElement.querySelector("[aria-expanded]");
    if (elementAriaAttr)
      toggleAttr(elementAriaAttr, "aria-expanded");  
  }
}