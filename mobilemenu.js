const openMenu = document.getElementById('open_menu');
const closeMenu = document.getElementById('close_menu');
const navItems = document.querySelector('.mobile-nav');

openMenu.addEventListener('click', () => {
  navItems.style.visibility = 'visible';
});

closeMenu.addEventListener('click', () => {
  navItems.style.visibility = 'hidden';
});

navItems.addEventListener('click', () => {
  navItems.style.visibility = 'hidden';
});