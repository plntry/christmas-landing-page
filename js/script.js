function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  mobileMenu.classList.toggle("active");
}

document.addEventListener("DOMContentLoaded", function () {
  // toggle mobile menu
  const navbarToggleButton = document.querySelector(
    ".navbar .mobile-menu-toggle"
  );
  const mobileMenuCloseButton = document.querySelector(
    ".navbar .mobile-menu-close-btn"
  );

  navbarToggleButton.addEventListener("click", () => toggleMobileMenu());
  mobileMenuCloseButton.addEventListener("click", () => toggleMobileMenu());

  // toggle like icon
  const giftLikes = document.querySelectorAll(".gift-like");

  giftLikes.forEach((giftLike) => {
    giftLike.addEventListener("click", () => {
      giftLike.classList.toggle("liked");
    });
  });
});

// change navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
