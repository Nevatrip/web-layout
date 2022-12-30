export default class dropDownElement {
  constructor(element, toggleElement, activeCLass, disabledClass) {
    this.element = element;
    this.activeCLass = activeCLass;
    this.disabledClass = disabledClass;
    this.toggleElement = toggleElement;
    this.closeButton = element.querySelector('.js_dke_close-button');

    this.toggleElement.addEventListener('click', () => {
      if (this.element.style.height === '') {
        this.open();
      } else {
        this.close();
      }
    });

    this.closeButton.addEventListener('click', () => this.close());
  }

  open() {
    if (this.activeCLass) {
      this.element.classList.add(this.activeCLass);
    }
    const endHeight = window.getComputedStyle(this.element).height;
    this.element.style.height = '0px';
    requestAnimationFrame(() => {
      this.element.style.height = endHeight;
    });
    this.element.addEventListener(
      'transitionend',
      () => {
        this.element.style.overflow = 'visible';
      },
      { once: true }
    );
  }

  close() {
    this.element.style.overflow = 'hidden';
    this.element.style.height = '0px';
    this.element.addEventListener(
      'transitionend',
      () => {
        this.element.classList.remove(this.activeCLass);
        if (this.disabledClass) {
          this.element.classList.add(this.disabledClass);
        }
        this.element.removeAttribute('style');
      },
      { once: true }
    );
  }
}
