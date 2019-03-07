
// const toggleMenu = () => {
//   // Toggle the "menu--open" class on your menu refence. 
// }


// 1.. Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// 2..create a reference to the ".menu-button" class
const menuButton;
menuButton.forEach(function(menu){
  return new Menu(menu);
// Using your menuButton reference, add a click handler that calls toggleMenu
class Menu {
  constructor(menu) {
    this.menu = menu;
    this.menuButtons = this.panel.querySelector('.menu-button');
    this.menuBtnOpen = this.panel.querySelector('.expandButton');
    //this.menuBtnClose = this.panel.querySelector('hide button???');
    this.menuContent = this.panel.querySelector('.article');

  this.menuButtons.addEventListener('hover', () => this.toggleMenu());
  }

  toggleMenu() {
    this.menuBtnOpen.classList.toggle('expandButton');
    this.menuBtnOpen.classList.toggle('expandButton');
  }
}
});

