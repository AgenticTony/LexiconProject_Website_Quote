/**
 * Burger Menu Navigation
 * Handles mobile navigation toggle functionality
 */
document.addEventListener("DOMContentLoaded", function () {
  const burgerMenu = document.getElementById("burger-menu");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = navMenu.querySelectorAll(".nav__link, .btn");

  // Toggle menu function
  function toggleMenu() {
    burgerMenu.classList.toggle("active");
    navMenu.classList.toggle("active");
    document.body.style.overflow = navMenu.classList.contains("active")
      ? "hidden"
      : "";
  }

  // Close menu function
  function closeMenu() {
    burgerMenu.classList.remove("active");
    navMenu.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Event listeners
  burgerMenu.addEventListener("click", toggleMenu);

  // Close menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close menu with escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && navMenu.classList.contains("active")) {
      closeMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener("click", function (e) {
    if (
      !burgerMenu.contains(e.target) &&
      !navMenu.contains(e.target) &&
      navMenu.classList.contains("active")
    ) {
      closeMenu();
    }
  });
});