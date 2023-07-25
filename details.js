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
    
  },
  {
    articleClass: 'work reverse',
    mobileImg: 'images/Snapshoot Portfolio3.png',
    desktopImg: 'images/d2.png',
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopClass: 'desktop',
    reverseClass: 'reverse',
    
  },
  {
    articleClass: 'work',
    mobileImg: 'images/Snapshoot Portfolio3.png',
    desktopImg: 'images/d3.png',
    heading: 'Facebook 360',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopClass: 'desktop',
    reverseClass: 'reverse',
    
  },
  {
    articleClass: 'work reverse',
    mobileImg: 'images/Snapshoot Portfolio2.png',
    desktopImg: 'images/desktop7.png',
    heading: 'Uber Navigation',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    desktopClass: 'desktop',
    reverseClass: 'reverse',
    
  }
]

for(let i = 0; i < Articles.length; i += 1) {
  const myArticles = document.getElementById('work_section').innerHTML;
  workSection.innerHTML =
    `<article class="${Articles[i].articleClass}">
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
                    <p>A daily selection of privately personalized reads; no accounts or sign-ups required.</p>
                    <ul class="languages">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                    </ul>
                    <button type="button">See Project</button>
                </div>

            </article>${myArticles}`;
}