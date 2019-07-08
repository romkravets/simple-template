import './index.scss';

const scrollBtn = document.querySelector('.scroll__top');


window.onscroll = () => {
   const navMenu = document.querySelector('#navMenu');
   if(window.pageYOffset <= 10) navMenu.className = 'menu'; else navMenu.className = 'menu_scroll';
   scrollFunction();
 }

const scrollFunction = () => {
   if(window.pageYOffset <= 700) scrollBtn.className = ' '; else scrollBtn.className = 'scroll__top_active';
}

const topFunction = () => {
   scrollBtn.addEventListener('click', () => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
   });
}

const burgerFunction = () => {
   const burger = document.querySelector('.burger');
   const navItems = document.querySelector('.menu__items');
   burger.addEventListener('click', () => {
      navItems.classList.toggle('menu__items_opened');
   });
}

burgerFunction();
topFunction();