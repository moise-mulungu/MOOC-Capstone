// const mobileMenu = document.querySelector('.mobile-menu');
const hamburger = document.querySelector('nav .hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const cancel = document.querySelector('.cancel');
const menuList = document.querySelectorAll('.menu-list li');
const lists = Array.from(menuList);

function print() {
  mobileMenu.style.display = 'flex';
}
hamburger.addEventListener('click', print);

function close() {
  mobileMenu.style.display = 'none';
}
cancel.addEventListener('click', close);

for (let i = 0; i < lists.length; i += 1) {
  lists[i].addEventListener('click', close);
}