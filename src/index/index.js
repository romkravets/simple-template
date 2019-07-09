import './index.scss';
import { burgerToggler } from './js/burgerToggler';

window.onscroll = () => {
   const navMenu = document.querySelector('#navMenu');
   if(window.pageYOffset <= 10) navMenu.className = 'menu'; else navMenu.className = 'menu_scroll';
 }

burgerToggler();