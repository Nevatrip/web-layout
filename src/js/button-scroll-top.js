export default class ButtonScrollTop {
  constructor(selector) {
    this.element = document.querySelector(selector);
    if(!this.element) return;
    
    window.addEventListener('scroll', () => {
      this.buttonChangeVisible()
    });
    
    this.element.addEventListener('click', () => {
      this.scrollToTop()
    });
  }

  //Появление кнопки если проскроллен 1 экран
  buttonChangeVisible(){
    const positionScollTop = window.pageYOffset;
    const screenHeight = window.innerHeight;

    if (positionScollTop > screenHeight) {
      this.element.classList.add('dke_active');
    } else {
      this.element.classList.remove('dke_active');
    }
  }

  //Прокрутка страницы вверх при клике
  scrollToTop(){
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
}