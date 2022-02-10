const hamburger = document.querySelector('.hamburger');
const aboutPage = document.querySelector('.about-page');

function display() {
  aboutPage.style.display = 'flex';
}
hamburger.addEventListener('click', display);
