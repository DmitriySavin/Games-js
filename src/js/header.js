const refs = {
  closeModalBtn: document.querySelector('.modal--close'),
  backdrop: document.querySelector('.js-backdrop'),
  saveButton: document.querySelector('.name__btn'),
  inputField: document.querySelector('#name'),
  siteGreeting: document.querySelector('#site-greeting'),
};

window.addEventListener('keydown', onEscKeyPress);
window.addEventListener('load', onOpenModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', onBackdropClick);
refs.saveButton.addEventListener('click', showGreeting);

function onOpenModal() {
  refs.backdrop.classList.add('is-open');
}

function closeModal() {
  refs.backdrop.classList.remove('is-open');
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    closeModal();
  }
}

function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}

function showGreeting() {
  const name = refs.inputField.value.trim();
  if (name) {
    refs.siteGreeting.textContent = `Вітаємо, ${name}!`;
    refs.siteGreeting.classList.remove('hidden');
    closeModal();
  }
}

const sunIcon = document.querySelector('.sun__icon');
const moonIcon = document.querySelector('.moon__icon');
const body = document.body;

sunIcon.addEventListener("click", () => {
  body.classList.remove('light-theme');
  body.classList.add('dark-theme');
});

moonIcon.addEventListener("click", () => {
  body.classList.remove('dark-theme');
  body.classList.add('light-theme');
});

const selectBtnElement = document.querySelector(".select__btn");

selectBtnElement.addEventListener("click", selectOption)

function selectOption() {
  
}



