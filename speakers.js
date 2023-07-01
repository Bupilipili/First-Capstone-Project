const speakers = [
  {
    Name: 'Yochai Benkler',
    Rank: 'Berkman Professor of Gender Studies at Harvard Law School',
    About: 'Benkler studies gender issues, and published his seminal book, The World without gender in 2006',
    image: './Features/images/speaker_01 1.svg',
  },
  {
    Name: 'Kilnam Chon',
    Rank: 'Basic Data and Communication',
    About: 'Kilnam Chon helped bring the internet to Asia and is an outspoken advocate for the open web and digital com-mons. In 2012. he was inducted into the inaugural class of the Internet Society’s (ISOC) Internet Hall of Fame',
    image: './Features/images/speaker_01 2.svg',
  },
  {
    Name: 'SohYeong Noh',
    Rank: 'Director of FGE Centre Nabi and a board member of FGE Korea',
    About: 'Noh was among the very first women who spear-headed gender equality worldwide',
    image: './Features/images/speaker_01 3.svg',
  },
  {
    Name: 'Julia Leda',
    Rank: 'President of Young Pirates of Europe',
    About: 'Leda has a full-time experience with alot of issues she came across in implementing Gender Equality',
    image: './Features/images/speaker_01 4.svg',
  },
  {
    Name: 'Lila tretikov',
    Rank: 'Executive Director of the FGE Foundation',
    About: 'Lila studies gender issues, and published her seminal book, What is gender in 2011',
    image: './Features/images/speaker_01 5.svg',
  },
  {
    Name: 'Ryan Merkley',
    Rank: 'CEO of Focus Gender Equality Fellowship',
    About: 'Ryan is involved with all the issues concerning gender fellowships and the rest of things needed',
    image: './Features/images/speaker_01 6.svg',
  },
];
function createProjectList() {
  const projects = document.querySelector('.grid3');
  for (let i = 0; i < speakers.length; i += 1) {
    const card = document.createElement('article');
    card.classList.add('speaker');
    card.innerHTML = `                  
    <img alt="speaker1" src="${speakers[i].image}" class="image">
    <div>
    <p class="Sname">${speakers[i].Name}</p>
    <h6>${speakers[i].Rank}</h6>
    <div class="smallbar"></div>
    <p class="Sabout">${speakers[i].About}</p>
    </article>
    `;
    projects.appendChild(card);
  }
}
createProjectList();