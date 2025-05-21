(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-backdrop]"),
  };

  const openModal = () => {
    refs.modal.classList.remove("is-hidden");
  };

  const closeModal = (event) => {
    if (event.type === "click" && event.target === refs.modal) {
      refs.modal.classList.add("is-hidden");
    }
    if (event.type === "keydown" && event.key === "Escape") {
      refs.modal.classList.add("is-hidden");
    }
  };

  refs.openModalBtn.addEventListener("click", openModal);
  refs.closeModalBtn.addEventListener("click", () => refs.modal.classList.add("is-hidden"));
  refs.modal.addEventListener("click", closeModal);
  document.addEventListener("keydown", closeModal);
})();