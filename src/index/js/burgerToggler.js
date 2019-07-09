const burger = document.querySelector('.burger');
const navItems = document.querySelector('.menu__items');

export const burgerToggler = () => {
   burger.addEventListener('click', () => {
      navItems.classList.toggle('menu__items_opened');
   });
}