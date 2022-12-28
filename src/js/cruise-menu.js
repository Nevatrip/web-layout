export function cruiseMenu() {
  const sectionCruiseMenu = document.querySelector('.dke_cruise-menu');
  const linksCruiseMenu = sectionCruiseMenu.querySelectorAll('.dke_cruise-menu__list-link');
  const navbar = document.querySelector('.dke_navbar');

  // установка отступа навигационного меню от верхней части экрана
  if (sectionCruiseMenu && navbar) {
    const bottomNavbar = navbar.getBoundingClientRect()?.bottom;
    sectionCruiseMenu.style.top = bottomNavbar + 'px';

    linksCruiseMenu.forEach(function(element) {
      element.addEventListener('click', function(e) {
        const activeLink = sectionCruiseMenu.querySelector('.dke_cruise-menu__list-link.dke_active');
        if (activeLink) activeLink.classList.remove('dke_active');

        element.classList.add('dke_active');
        scrollToSection.call(this, e, bottomNavbar);
        
      });
    });
  }
}

  //Прокрутка страницы до блока с нужным id при клике
function scrollToSection(e, bottomNavbar){
  e.preventDefault();

  const href = this.getAttribute("href");
  const section = document.querySelector(href);

  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset - bottomNavbar * 3;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}
