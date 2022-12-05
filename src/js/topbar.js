export default class Topbar {
  constructor(element) {
    this.element = element;

    this.languagesCurrent = element.querySelector(
      '[data-role="languagesCurrent"]'
    );
    this.languagesList = element.querySelector('[data-role="languagesList"]');
    this.burgerIcon = element.querySelector('[data-role="burgerIcon"]');

    this.languagesCurrent.addEventListener('click', () => {
      this.toggleLanguagesList();
    });
    this.burgerIcon.addEventListener('click', () => {
      this.toggleBurgerIcon();
    });
  }

  toggleLanguagesList() {
    this.languagesList.classList.toggle('dke_languages__list_opened');
  }

  toggleBurgerIcon() {
    this.burgerIcon.classList.toggle('dke_burger__icon_active');
  }
}
