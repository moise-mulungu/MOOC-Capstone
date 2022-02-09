const speakers = [
    {
      speakerImg: 'mooc-images/speaker1.jpeg',
      speakerName: 'Ariel Camus',
      speakerTitle: 'CEO and founder of Microverse',
    },
    {
        speakerImg: 'mooc-images/speaker1.jpeg',
        speakerName: 'Ariel Camus',
        speakerTitle: 'CEO and founder of Microverse',
      },
      {
        speakerImg: 'mooc-images/speaker1.jpeg',
        speakerName: 'Ariel Camus',
        speakerTitle: 'CEO and founder of Microverse',
      },
      {
        speakerImg : 'mooc-images/speaker1.jpeg',
        speakerName: 'Ariel Camus',
        speakerTitle: 'CEO and founder of Microverse',
      },
      {
        speakerImg : 'mooc-images/speaker1.jpeg',
        speakerName: 'Ariel Camus',
        speakerTitle: 'CEO and founder of Microverse',
      },
];
const speakersContainer = document.querySelector('.speakers');

function generateSection() {
    speakersContainer.innerHTML = '';
    for (let i = 0; i < speakers.length; i += 1) {
        speakersContainer.innerHTML = `${ speakersContainer.innerHTML}
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