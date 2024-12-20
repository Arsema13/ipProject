const menuIcon = document.getElementById('menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
  console.log('Menu icon clicked');
  navList.classList.toggle('open');
  console.log('Nav list open state:', navList.classList.contains('open'));
});

window.onscroll = () => {
  navList.classList.remove('open');
};
