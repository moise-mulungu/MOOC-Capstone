const hamburger = document.querySelector('.hamburger');
const aboutPage = document.querySelector('.about-page');

function display() {
  aboutPage.style.display = 'flex';
}
hamburger.addEventListener('click', display);

const speakers = [
  {
    speakerImg: 'mooc-images/speaker1.jpeg',
    speakerName: 'Ariel Camus',
    speakerTitle: 'CEO and founder of Microverse',
  },
  {
    speakerImg: 'mooc-images/speaker2.jpeg',
    speakerName: 'Erik Trautman',
    speakerTitle: 'CEO and co-founder of The Odin Project',
  },
  {
    speakerImg: 'mooc-images/speaker3.jpeg',
    speakerName: 'Zach Smith',
    speakerTitle: 'CEO and co-founder of codeCademy',
  },
  {
    speakerImg: 'mooc-images/speaker4.jpeg',
    speakerName: 'Chris Wanstrath',
    speakerTitle: 'CEO and co-founder of Github',
  },
  {
    speakerImg: 'mooc-images/speaker5.jpeg',
    speakerName: 'Quincy Larson',
    speakerTitle: 'CEO and founder of freeCodeCamp',
  },
  {
    speakerImg: 'mooc-images/speaker6.jpeg',
    speakerName: 'Vivek Ravisankar',
    speakerTitle: 'CEO and co-founder of HackerRank',
  },
];
const speakersContainer = document.querySelector('.speakers');

function generateSection() {
  speakersContainer.innerHTML = '';
  for (let i = 0; i < speakers.length; i += 1) {
    speakersContainer.innerHTML = `${speakersContainer.innerHTML}
    <div class="speaker">
    <img src="${speakers[i].speakerImg}" alt="The first speaker ">
    <div class="him">
        <h4>${speakers[i].speakerName}</h4>
        <hr>
        <p><em>${speakers[i].speakerTitle}</em></p>
    </div>
</div>`;
  }
}
window.addEventListener('load', () => {
  generateSection();
});