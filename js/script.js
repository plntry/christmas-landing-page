function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  mobileMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggleButton = document.querySelector(
    ".navbar .mobile-menu-toggle"
  );
  const mobileMenuCloseButton = document.querySelector(
    ".navbar .mobile-menu-close-btn"
  );

  navbarToggleButton.addEventListener("click", () => toggleMobileMenu());
  mobileMenuCloseButton.addEventListener("click", () => toggleMobileMenu());
});
