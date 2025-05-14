(() => {
<<<<<<< Updated upstream
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-backdrop]"),
  };


  const toggleModal = () => {
    refs.modal.classList.toggle("is-hidden");
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);
  refs.modal.addEventListener("click", (event) => {
    if (event.target === refs.modal) {
      toggleModal();
    }
  });

  document.addEventListener("keydown", (event) => ({
    Escape: toggleModal,
  }[event.key]?.()));
})();
=======
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-backdrop]'),
    };
  
    refs.openModalBtn.addEventListener('click', toggleModal);
    refs.closeModalBtn.addEventListener('click', toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();
>>>>>>> Stashed changes
