// Select the elements
const mobileMenu = document.getElementById("mobile-menu");
const navMenu = document.querySelector(".navbar nav");
const openIcon = document.querySelector(".open-icon");
const closeIcon = document.querySelector(".close-icon");

// Toggle the menu and icons
mobileMenu.addEventListener("click", () => {
  navMenu.classList.toggle("active");

  // Check if menu is active and toggle icons
  if (navMenu.classList.contains("active")) {
    openIcon.style.display = "none"; // Hide the open icon
    closeIcon.style.display = "inline"; // Show the close icon
  } else {
    openIcon.style.display = "inline"; // Show the open icon
    closeIcon.style.display = "none"; // Hide the close icon
  }
});
