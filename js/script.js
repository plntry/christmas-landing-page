function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  mobileMenu.classList.toggle("active");
}

// toggle mobile menu
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

// change navbar background on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
