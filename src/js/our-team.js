const photos = document.querySelectorAll('.our-team-image');
const leftButton = document.querySelector('.our-team-button-left');
const rightButton = document.querySelector('.our-team-button-right');
const nameElement = document.querySelector('.our-team-name');
const infoElement = document.querySelector('.our-team-info');
const dots = document.querySelectorAll('.our-team-dot');

const teamMembers = [
  {
    name: 'Діма',
    info: 'Team-lead команди, програмування секції Динозавр та Обери вченого',
  },
  {
    name: 'Антон',
    info: 'Scram-master, програмування секції Header та Футбол',
  },
  {
    name: 'Артур',
    info: 'Програмування секції Наша Команда та гри Камінь-ножиці-папір',
  },
  {
    name: 'Василь',
    info: 'Програмування секції Інтерактивні ігри та Введіть 3 числа',
  },
  {
    name: 'Нікіта',
    info: 'Програмування секції Калькулятор а також Калькулятор часу',
  },
  {
    name: 'Артем',
    info: 'Програмування секції Footer',
  },
];

let currentIndex = 0;

function updateSlider() {
  photos.forEach((photo, index) => {
    photo.style.display = index === currentIndex ? 'block' : 'none';
  });

  nameElement.textContent = teamMembers[currentIndex].name;
  infoElement.textContent = teamMembers[currentIndex].info;

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });
}

rightButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % teamMembers.length;
  updateSlider();
});

leftButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + teamMembers.length) % teamMembers.length;
  updateSlider();
});

updateSlider();
