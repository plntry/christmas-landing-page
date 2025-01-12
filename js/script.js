// CSS variables for light / dark mode
const cssVariables = {
  // Body
  "--body-color": {
    light: "#ffffff",
    dark: "#251819",
  },
  "--body-color-scroll": {
    light: "rgba(255, 255, 255, 0.7)",
    dark: "rgba(37, 24, 25, 0.7)",
  },

  // Container
  "--container-color": {
    light: "#ffffff",
    dark: "#2f2223",
  },

  // Text
  "--title-color": {
    light: "#282525",
    dark: "#f3f2f2",
  },
  "--text-color": {
    light: "#5d5656",
    dark: "#c2bdbd",
  },
  "--text-color-light": {
    light: "#918889",
    dark: "#918889",
  },

  // Button
  "--primary-color-btn": {
    light: "#dc3845",
    dark: "#dc3845",
  },
  "--hover-primary-color-btn": {
    light: "#db4d59",
    dark: "#d42b39",
  },
  "--secondary-color-btn": {
    light: "#000000",
    dark: "#dc3845",
  },
  "--hover-secondary-color-btn": {
    light: "#282525",
    dark: "#d42b39",
  },

  // Form
  "--form-color": {
    light: "#dc3845",
    dark: "#2f2223",
  },
};

// Helpers
function toggleMobileMenu() {
  const mobileMenu = document.querySelector(".navbar .mobile-menu-items");
  mobileMenu.classList.toggle("active");
}

function updateCSSVariables(theme = "light") {
  for (const variableName in cssVariables) {
    document.documentElement.style.setProperty(
      variableName,
      cssVariables[variableName][theme]
    );
  }
}

// Main Code
document.addEventListener("DOMContentLoaded", function () {
  // Toggle mobile menu
  const navbarToggleButton = document.querySelector(
    ".navbar .mobile-menu-toggle"
  );
  const mobileMenuCloseButton = document.querySelector(
    ".navbar .mobile-menu-close-btn"
  );

  navbarToggleButton.addEventListener("click", () => toggleMobileMenu());
  mobileMenuCloseButton.addEventListener("click", () => toggleMobileMenu());

  // Toggle theme icon & update css variables
  const toggleTheme = document.querySelector(".toggle-theme");

  toggleTheme.addEventListener("click", () => {
    if (toggleTheme.classList.toggle("dark")) {
      updateCSSVariables("dark");
    } else {
      updateCSSVariables("light");
    }
  });

  // Toggle like icon
  const giftLikes = document.querySelectorAll(".gift-like");

  giftLikes.forEach((giftLike) => {
    giftLike.addEventListener("click", () => {
      giftLike.classList.toggle("liked");
    });
  });
});

// Change navbar background on scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");

  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});

// SwiperJS initialization
const swiper = new Swiper('.card-wrapper', {
  direction: 'horizontal',
  loop: true,
  centeredSlides: true,
  setWrapperSize: true,

  autoplay: {
    delay: 4000
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  breakpoints: {
    0: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 64,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 64,
    },
  }
});
