export default class Topbar {
  constructor(element) {
    this.element = element;

    this.languagesCurrent = element.querySelector(
      '[data-role="languagesCurrent"]'
    );
    this.languagesList = element.querySelector('[data-role="languagesList"]');

    this.languagesCurrent?.addEventListener('click', () => {
      this.toggleLanguagesList();
    });
  }

  toggleLanguagesList() {
    this.languagesList.classList.toggle('dke_languages__list_opened');
  }
}
