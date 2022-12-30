const navbar = document.querySelector('.dke_navbar');
const sectionCruiseMenu = document.querySelector('.dke_cruise-menu');

export function cruiseMenu() {
  const linksCruiseMenu = sectionCruiseMenu.querySelectorAll('.dke_cruise-menu__list-link');

  // установка отступа навигационного меню от верхней части экрана
  setTopExcursionMenu();

  // нажатие на якорные ссылки нав. меню экскурсии
  if (sectionCruiseMenu)
    linksCruiseMenu?.forEach(function(link) {
      link?.addEventListener('click', scrollToSection);
    });

  window.addEventListener('scroll', function() {
    const sectionCruiseMenuBottom = sectionCruiseMenu.getBoundingClientRect().bottom;

    linksCruiseMenu?.forEach(function(link) {
      setActiveLink.call(this, link, sectionCruiseMenuBottom)
    });
  });
}

window.addEventListener('resize', () => {
  setTopExcursionMenu();
});

// установка отступа меню экскурсии от верхней части экрана
function setTopExcursionMenu() {
  if (navbar && sectionCruiseMenu) {
    const bottomHeight = navbar.getBoundingClientRect().bottom;
    sectionCruiseMenu.style.top = bottomHeight + 'px';
  }
}

// прокрутка страницы до блока с нужным id при клике по ссылке-якорь 
function scrollToSection(e){
  e.preventDefault();

  const href = this.getAttribute('href');
  const section = document.querySelector(href);
  
  if (navbar && section && sectionCruiseMenu) {
    const sectionCruiseMenuHeight = sectionCruiseMenu.offsetHeight;
    const navbarHeight = navbar.offsetHeight;
    const y = section.getBoundingClientRect().top + window.pageYOffset - sectionCruiseMenuHeight - navbarHeight;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}

// изменение активной ссылки нав. меню экскурсии
function setActiveLink(link, menuBottom) {
  const href = link.getAttribute('href');
  const section = document.querySelector(href);
  const { top: sectionTop, 
          bottom: sectionBottom } = section.getBoundingClientRect();
  
  if (sectionTop <= menuBottom + 30
      && sectionBottom > menuBottom)
        link.classList.add('js_dke_active');
  else link.classList.remove('js_dke_active');
}
