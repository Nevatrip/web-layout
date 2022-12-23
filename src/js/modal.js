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

    this.element.classList.add('dke_modal_active');
    document.body.classList.add('active-modal');

    if (isVerticalScrollbar) {
      this.element.classList.add('dke_modal_active-padding');
      document.body.classList.add('scroll-padding');
    }
  }

  closeModal() {
    this.element.classList.remove('dke_modal_active');
    this.element.classList.remove('dke_modal_active-padding');
    document.body.classList.remove('active-modal');
    document.body.classList.remove('scroll-padding');
  }
}
