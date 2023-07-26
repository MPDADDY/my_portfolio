const workSection = document.getElementById('work_section');
const Articles = [
  {
    articleClass: 'work',
    mobileImg: 'images/Snapshoot Portfolio3.png',
    desktopImg: 'images/d1.png',
    heading: 'Tonic',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopClass: 'desktop',
    reverseClass: 'reverse',
    liveLink: 'https://mpdaddy.github.io/my_portfolio/',
    liveSource: 'https://github.com/MPDADDY/my_portfolio/blob/details-popup-window/details.js',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    articleClass: 'work reverse',
    mobileImg: 'images/Snapshoot Portfolio3.png',
    desktopImg: 'images/d2.png',
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopClass: 'desktop',
    reverseClass: 'reverse',
    liveLink: 'https://mpdaddy.github.io/my_portfolio/',
    liveSource: 'https://github.com/MPDADDY/my_portfolio/blob/details-popup-window/details.js',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    articleClass: 'work',
    mobileImg: 'images/Snapshoot Portfolio3.png',
    desktopImg: 'images/d3.png',
    heading: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopClass: 'desktop',
    reverseClass: 'reverse',
    liveLink: 'https://mpdaddy.github.io/my_portfolio/',
    liveSource: 'https://github.com/MPDADDY/my_portfolio/blob/details-popup-window/details.js',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    articleClass: 'work reverse',
    mobileImg: 'images/Snapshoot Portfolio2.png',
    desktopImg: 'images/desktop7.png',
    heading: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopClass: 'desktop',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://mpdaddy.github.io/my_portfolio/',
    liveSource: 'https://github.com/MPDADDY/my_portfolio/blob/details-popup-window/details.js',
    reverseClass: 'reverse',
  },
];

for (let i = 0; i < Articles.length; i += 1) {
  const myArticles = document.getElementById('work_section').innerHTML;
  workSection.innerHTML = `<article class="${Articles[i].articleClass}">
                <div class="work_img">
                    <img class="mobile" src="${Articles[i].mobileImg}" alt="work screenshot">
                    <img class="desktop" src="${Articles[i].desktopImg}">
                </div>
                <div class="work_info">
                    <h2>${Articles[i].heading}</h2>
                    <div class="canopy">
                        <div>
                            <h5>CANOPY</h5>
                        </div>
                        <ul class="canopy_languages">
                            <li>
                                <img src="images/Counter.png" alt="counter image">
                                <span>Backend dev</span>
                            </li>
                            <li>
                                <img src="images/Counter.png" alt="counter image">
                                <span>2015</span>
                            </li>
                        </ul>
                    </div>
                    <p>${Articles[i].description}</p>
                    <ul class="languages">
                        <li>${Articles[i].technologies[0]}</li>
                        <li>${Articles[i].technologies[1]}</li>
                        <li>${Articles[i].technologies[2]}</li>
                    </ul>
                    <button class= "see" type="button">See Project</button>
                </div>

            </article>
             <!--pop up-->
        <div class="desktopPopup">
            <div class="desktopPopup_header">
                <h2>Tonic</h2>
                <button type='button' id= "closePopup" class="closePopup">x</button>
            </div>
            <div class="canopy ">
                <div>
                    <h5>CANOPY</h5>
                </div>
                <ul class="canopy_languages">
                    <li>
                        <img class="smallImg" src="images/Counter.png" alt="counter image ">
                        <span>Backend dev</span>
                    </li>
                    <li>
                        <img class="smallImg" src="images/Counter.png" alt="counter image ">
                        <span>2015</span>
                    </li>
                </ul>
            </div>
            <div class="popupImg">
                <img src="${Articles[i].desktopImg}" alt="popup image">r
            </div>
            <div class="desktopPopup_descriptions">
                <div>
                    <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
                </div>
                <div>
                    <ul class="languages">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <div>
                      <button class="popup-links" type="button">see live</button>
                      <button class="popup-links" type="button">See source</button>
                    </div>
                </div>
            </div>
        </div>
        <div id="overlay" class="overlay"></div>
        <!--pop up-->${myArticles}`;
}

/** popup window */
const modals = document.getElementsByClassName('desktopPopup');
const close = document.getElementsByClassName('closePopup');

/** modals loop */
function activateModalAticles() {
  for (let i = 0; i < modals.length; i += 1) {
    modals[i].style.display = 'block';
  }
}

const overlay = document.getElementById('overlay');
function activateModal() {
  overlay.style.display = 'block';
  activateModalAticles();
}

function deactivateModal() {
  overlay.style.display = 'none';
  for (let i = 0; i < modals.length; i += 1) {
    modals[i].style.display = 'none';
  }
}

const seeBtns = document.getElementsByClassName('see');
for (let i = 0; i < seeBtns.length; i += 1) {
  seeBtns[i].addEventListener('click', activateModal);
}

for (let i = 0; i < close.length; i += 1) {
  close[i].addEventListener('click', deactivateModal);
}
