const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: 'Katherine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
  },
];

function resetAllEffects() {
  const allItems = document.querySelectorAll('.scientist-list_img');

  allItems.forEach(item => {
    item.classList.remove('border-color', 'delete-name_A', 'border-green');

    const ageText = item.querySelector('scientist-text_img');
    if (ageText) {
      ageText.classList.remove('albert-age_opacity');
    }

    const labelsAge = item.querySelectorAll('.older-younger');
    labelsAge.forEach(label => label.remove());

    //      const labelsEinstein = item.querySelectorAll('.scientist-text_img');
    // labelsEinstein.forEach(label => label.remove());
  });
  const ageAlbert = document.getElementById('ageAlbert');
  if (ageAlbert) {
    ageAlbert.classList.remove('albert-age_opacity');
  }
}

//

const imagesBorder = document.querySelectorAll('.border-color');
const scientist19St = document.querySelector('.scientist-list_question');

scientist19St.addEventListener('click', () => {
  resetAllEffects();
  imagesBorder.forEach(image => {
    image.classList.add('border-green');
  });
});

//

const imageAlbertEinstein = document.getElementById('ageAlbert');
const btnAgeEinstein = document.getElementById('ageEinstein');
btnAgeEinstein.addEventListener('click', () => {
  resetAllEffects();
  imageAlbertEinstein.classList.add('albert-age_opacity');
});

// for (const scientist of scientists) {
//     scientist.sort((a, b) => a.name - b.name)
//     console.log(scientist)
// };

//

const scientistList = document.getElementById('scientistList');
const btnSortScientists = document.getElementById('sortScientists');
// const imageNames = document.querySelectorAll('scientist-name_list');

btnSortScientists.addEventListener('click', () => {
  resetAllEffects();
  const items = Array.from(scientistList.querySelectorAll('li'));

  items.sort((a, b) => {
    const nameA = a.querySelector('.scientist-name_list').textContent.trim();
    const nameB = b.querySelector('.scientist-name_list').textContent.trim();
    return nameA.localeCompare(nameB);
  });
  items.forEach(item => scientistList.appendChild(item));
});
//

const takeNameC = document.getElementById('nameOnC');

takeNameC.addEventListener('click', () => {
  resetAllEffects();
  const allItems = document.querySelectorAll('.scientist-list_img');

  allItems.forEach(item => {
    const name = item.querySelector('.scientist-name_list').textContent.trim();
    if (name.startsWith('S') || '') {
      item.classList.add('border-green');
    }
  });
});
//

const btnLivedAgeSort = document.getElementById('livedAge');
btnLivedAgeSort.addEventListener('click', () => {
  resetAllEffects();
  const sortedScientists = [...scientists].sort((a, b) => {
    const ageA = a.dead - b.born;
    const ageB = b.dead - a.born;
    return ageA - ageB;
  });
  const list = document.getElementById('scientistList');
  sortedScientists.forEach(scientist => {
    const li = document.getElementById(scientist.name);
    if (li) {
      list.appendChild(li);
    }
  });
});

//

const delNameA = document.getElementById('delNameA');

delNameA.addEventListener('click', () => {
  resetAllEffects();
  const allItems = document.querySelectorAll('.scientist-list_img');

  allItems.forEach(item => {
    const name = item.querySelector('.scientist-name_list').textContent.trim();
    if (name.startsWith('A') || '') {
      item.classList.add('delete-name_A');
    }
  });
});

//

const birthdayOlder = document.getElementById('birthdayOlder');
const katherine = document.getElementById('Katherine');

birthdayOlder.addEventListener('click', () => {
  resetAllEffects();
  katherine.classList.add('border-green');
});

//

const liza = document.getElementById('Lise');
const ada = document.getElementById('Ada');
const btnAges = document.getElementById('olderAndYounger');

btnAges.addEventListener('click', () => {
  resetAllEffects();
  liza.classList.add('border-green');
  ada.classList.add('border-green');

  if (!ada.querySelector('older-younger')) {
    const younger = document.createElement('p');
    younger.textContent = 'Найменше';
    younger.className = 'older-younger';
    ada.appendChild(younger);
  }

  if (!liza.querySelector('older-younger')) {
    const older = document.createElement('p');
    older.textContent = 'Найдовше';
    older.className = 'older-younger';
    liza.appendChild(older);
  }
});

//
// console.log(scientists)

const btnNameAndSurname = document.getElementById('nameAndSurname');
const allItems = document.querySelectorAll('.scientist-list_img');

btnNameAndSurname.addEventListener('click', () => {
  resetAllEffects();
  allItems.forEach(item => {
    const nameEl = item.querySelector('.scientist-name_list');
    const fullName = nameEl.textContent.trim();
    const [name, surname] = fullName.split(' ');

    if (name && surname && name[0] === surname[0]) {
      item.classList.add('border-green');
    }
  });
});
