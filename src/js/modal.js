export default class Modal {
  constructor(element) {
    this.element = element;
    this.modalWindow = element.querySelector('[data-role="modal-window"]');
    this.closeButton = element.querySelector('[data-role="close-modal"]');

    this.element?.addEventListener('click', () => this.closeModal());
    this.modalWindow?.addEventListener('click', e => {
      e.stopPropagation();
    });
    this.closeButton?.addEventListener('click', () => {
      this.closeModal();
    });
  }

  openModal() {
    const isVerticalScrollbar = document.body.offsetWidth < window.innerWidth;

    this.element.classList.add('js_dke_modal-active');
    document.body.classList.add('js_dke_active-modal');

    if (isVerticalScrollbar) {
      this.element.classList.add('js_dke_active-padding');
      document.body.classList.add('js_dke_scroll-padding');
    }
  }

  closeModal() {
    this.element.classList.remove('js_dke_modal-active');
    this.element.classList.remove('js_dke_active-padding');
    document.body.classList.remove('js_dke_active-modal');
    document.body.classList.remove('js_dke_scroll-padding');
  }
}
