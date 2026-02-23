const refs = {
  openModalBtn: document.querySelector("[hero-modal-open]"),
  modal: document.querySelector("[data-modal]"),
  close: document.querySelector("[data-modal-close]"),
  form: document.querySelector(".modal__form"),
  backdrop: document.querySelector(".backdrop"),
};

refs.openModalBtn.addEventListener("click", () => {
  refs.modal.classList.add("is-hidden");
});

refs.close.addEventListener("click", () => {
  refs.modal.classList.remove("is-hidden");
  refs.form.reset();
});

refs.form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  refs.modal.classList.remove("is-hidden");
  refs.form.reset();
});

document.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    refs.modal.classList.remove("is-hidden");
  }
});

document.addEventListener("click", (evt) => {
  if (evt.target === refs.backdrop) {
    refs.modal.classList.remove("is-hidden");
  }
});
