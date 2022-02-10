const speakers = [
  {
    speakerImg: 'mooc-images/speaker1.png',
    speakerName: 'Yochai Benkler',
    speakerTitle: ' Professor and entrepreneur and Legal Studies at Stanford University',
    aboutSpeaker: 'Benkler studies common based on new technology and change the entire system.',
  },
  {
    speakerImg: 'mooc-images/speaker2.png',
    speakerName: 'SohYeng Noh',
    speakerTitle: 'Director and Art specialist at the mooc studies based in South-korea',
    aboutSpeaker: 'As the main venue at media, she promotes science and technology based on online studies',
  },
  {
    speakerImg: 'mooc-images/speaker3.png',
    speakerName: 'Lila Tretkov',
    speakerTitle: 'Executive Director of the online program located in Eastern Europe',
    aboutSpeaker: 'Lila is the Executive Director of online foundation program, the non-profit organisation that works along wikipedia',
  },
  {
    speakerImg: 'mooc-images/speaker4.png',
    speakerName: 'Kilnam Chon',
    speakerTitle: 'Chief Executive working in promotion of remote education via different online platform',
    aboutSpeaker: 'She volunteered in helping many online to apply diffferent approaches for the success of those platforms.',
  },
  {
    speakerImg: 'mooc-images/speaker5.png',
    speakerName: 'Julia Leda',
    speakerTitle: 'Director and co-founder of the mooc-for-all school based in California',
    aboutSpeaker: 'She primarly started his early stage in computing in the 80\'s, then immigrated in the US in the 2000\'s where he encountered many experts in the domain',
  },
  {
    speakerImg: 'mooc-images/speaker6.png',
    speakerName: 'Ryan Mekler',
    speakerTitle: 'CEO and creative personnel chief at Tech promotion based in Ontario, Canada',
    aboutSpeaker: 'He started his career in civil engineering and later moved to the tech industry where he worked in many organizations and companies based precisely in North-America.',
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
        <p><em>${speakers[i].speakerTitle}</em></p>
        
        <p><em>${speakers[i].aboutSpeaker}</em></p>
    </div>
</div>`;
  }
}
window.addEventListener('load', () => {
  generateSection();
});