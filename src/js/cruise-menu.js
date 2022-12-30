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
  const topbar = document.querySelector('.dke_topbar');
  const topbarBottom = topbar.getBoundingClientRect().bottom;
  const navbarBottom = navbar.getBoundingClientRect().bottom;
  const topbarHeight = topbar.offsetHeight;
  if (topbar && navbar && sectionCruiseMenu) {
    const cruiseMenuBottom = navbarBottom - (topbarBottom > 0 ? topbarHeight : 0);
    sectionCruiseMenu.style.top = cruiseMenuBottom + 'px';
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
      && sectionBottom > menuBottom) {
        if (!link.classList.contains('js_dke_active')) {
          const sectionCruiseMenuWrapper = sectionCruiseMenu.querySelector('.dke_cruise-menu__wrapper');
          const x = link.getBoundingClientRect().left - window.innerWidth / 2 + link.offsetWidth / 2;
          sectionCruiseMenuWrapper.scrollTo({
            left: x,
            behavior: 'smooth'
          });    
          console.log(x);
          link.classList.add('js_dke_active');
        }
      }
  else link.classList.remove('js_dke_active');
}
