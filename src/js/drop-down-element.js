export default class dropDownElement {
  constructor(element) {
    this.element = element;
    this.toggleElement = document.querySelector('.js_dke_toggle');
    this.closeButton = element.querySelector('.js_dke_close-button');

    this.toggleElement.addEventListener('click', () => {
      if (this.element.style.height === '0px') {
        this.element.style.height = `${this.element.scrollHeight}px`;
      } else {
        this.element.style.height = `${this.element.scrollHeight}px`;
        window.getComputedStyle(this.element).height;
        this.element.style.height = '0';
        // this.element.removeAttribute('style');
      }
    });
  }
}
