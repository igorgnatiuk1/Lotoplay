(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const mobileLink = document.querySelectorAll("[data-mobile-fix]");

  [...mobileLink].map((elem) =>
    elem.addEventListener("click", () => {
      mobileMenuRef.classList.remove("is-open");
      menuBtnRef.classList.remove("is-open");
    })
  );

  menuBtnRef.addEventListener("click", () => {
    menuBtnRef.classList.toggle("is-open");

    mobileMenuRef.classList.toggle("is-open");
  });
})();
