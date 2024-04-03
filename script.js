// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('header nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// Simple form validation for the contact form
const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', (event) => {
  const nameInput = document.querySelector('#name');
  const emailInput = document.querySelector('#email');

  if (nameInput.value === '' || emailInput.value === '') {
    alert('Please fill in both name and email fields.');
    event.preventDefault();
  }
});

// Optional: Image lightbox effect
const projectImages = document.querySelectorAll('.project img');

projectImages.forEach(image => {
  image.addEventListener('click', (event) => {
    event.preventDefault();
    // Code for displaying a lightbox overlay with the image
  });
});
