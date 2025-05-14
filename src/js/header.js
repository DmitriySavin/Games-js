const refs = {
  closeModalBtn: document.querySelector('.modal--close'),
  backdrop: document.querySelector('.js-backdrop'),
};

window.addEventListener('keydown', onEscKeyPress);
window.addEventListener('load', onOpenModal);
refs.closeModalBtn.addEventListener('click', closeModal);
refs.backdrop.addEventListener('click', onBackdropClick);

function onOpenModal() {
  refs.backdrop.classList.add('is-open');
}

function closeModal() {
  refs.backdrop.classList.remove('is-open');
}

function onBackdropClick(event) {
    if (event.currentTarget === event.target) {
        console.log("Кликнули именно в бекдроп")
        closeModal();
    }
}
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeModal();
  }
}