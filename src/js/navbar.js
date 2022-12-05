export default class Navbar {
  constructor(element) {
    this.element = element;

    this.burgerIcon = element.querySelector('[data-role="burgerIcon"]');

    this.burgerIcon.addEventListener('click', () => {
      this.toggleBurgerIcon();
    });
  }

  toggleBurgerIcon() {
    this.burgerIcon.classList.toggle('dke_burger__icon_active');
  }
}
