const hamburger = document.querySelector('.hamb');
const mobileMenu = document.querySelector('.mobile-menu');
const closeIcon = document.querySelector('.cancel');
const menuPage = document.querySelectorAll('.menu-list li');
const listItems = Array.from(menuPage);

function open() {
  mobileMenu.style.display = 'block';
}

hamburger.addEventListener('click', open);

function close() {
  mobileMenu.style.display = 'none';
}
closeIcon.addEventListener('click', close);

for (let i = 0; i < listItems.length; i += 1) {
  listItems[i].addEventListener('click', close);
}