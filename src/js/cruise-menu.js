import { offset } from './utils.js';

const sectionCruiseMenu = document.querySelector('.dke_cruise-menu');

export function cruiseMenu() {
  const linksCruiseMenu = sectionCruiseMenu.querySelectorAll('.dke_cruise-menu__list-link');
  const navbar = document.querySelector('.dke_navbar');

  // установка отступа навигационного меню от верхней части экрана
  if (sectionCruiseMenu && navbar) {
    const sectionCruiseMenu = document.querySelector('.dke_cruise-menu');
    const topCruiseMenu = offset(sectionCruiseMenu).top;


    window.addEventListener('scroll', () => {
      changeStickyCruiseMenu(topCruiseMenu);
    });

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

let sticky = false;
let node1 = null;
let nodeHeight = null;

// прилипание навигационного меню при скролле
function changeStickyCruiseMenu(top){
  const windowY = window.pageYOffset;

  const navbar = document.querySelector('.dke_navbar');
  if (windowY + document.querySelector('.dke_head-navbar').offsetHeight > top && !sticky) {
    node1 = document.querySelector('.dke_cruise-menu');
    const cloneNode = a.cloneNode(true);
    navbar.append(cloneNode);
    sticky = true;
  } 
  else if (windowY <= top + nodeHeight && sticky) {
    const node2 = navbar.querySelector('.dke_cruise-menu');
    nodeHeight = navbar.querySelector('.dke_cruise-menu').offsetHeight;
    const cloneNode = node2.cloneNode(true);
    node1?.remove();
    document.querySelector('#cruise-menu').append(cloneNode);
    node2.remove();
    sticky = false;
  }
}

// Прокрутка страницы до блока с нужным id при клике
function scrollToSection(e, bottomNavbar){
  e.preventDefault();

  const href = this.getAttribute('href');
  const section = document.querySelector(href);

  if (section) {
    const y = section.getBoundingClientRect().top + window.pageYOffset - bottomNavbar * 3;
    
    window.scrollTo({
      top: y,
      behavior: 'smooth'
    });
  }
}
