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

const carouselImages = document.querySelectorAll(".carousel-image");
const indicators = document.querySelectorAll(".indicator");

let currentIndex = 0;
const intervalTime = 5000; // 5 seconds

function showSlide(index) {
  // Remove active class from all images and indicators
  carouselImages.forEach((image) => image.classList.remove("active"));
  indicators.forEach((indicator) => indicator.classList.remove("active"));

  // Add active class to the current image and indicator
  carouselImages[index].classList.add("active");
  indicators[index].classList.add("active");
}

// Automatically cycle through slides
function startCarousel() {
  setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    showSlide(currentIndex);
  }, intervalTime);
}

// Initialize
showSlide(currentIndex);
startCarousel();

// Manual slide selection
indicators.forEach((indicator, index) => {
  indicator.addEventListener("click", () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// Get all nav links
const navLinks = document.querySelectorAll('.navbar ul li a');

// Add click event listener to each link
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    // Remove active class from all links
    navLinks.forEach(nav => nav.classList.remove('active'));
    // Add active class to the clicked link
    link.classList.add('active');
  });
});

