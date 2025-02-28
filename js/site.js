let slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

setInterval(() => {
  showSlide(currentSlide + 1);
}, 3000);



  var header = document.querySelector('.header');
  var menu = document.querySelector('.menu');
  var menuList = document.querySelector('.menu-list');
  var logo = document.querySelector('.logo');
  var toggleA = document.querySelector('.toggle');
  var About = document.querySelector('.ab');
// Add an event listener to the hamburger button

function show(){
  header.classList.toggle('header-active');
  menu.classList.toggle('menu-active');
  menuList.classList.toggle('menu-list-active');
  logo.classList.toggle('logo-active');
  toggleA.classList.toggle('toggle-res-active');
  About.classList.toggle('about-active');
}

let currentPage = 1;
showPage(currentPage);

function showPage(page) {
  const pages = document.querySelectorAll('.page');
  pages.forEach(page => {
    page.style.display = 'none';
  });
  pages[page - 1].style.display = 'block';
}

function showNextPage() {
  currentPage++;
  if (currentPage > document.querySelectorAll('.page').length) {
    currentPage = 1;
  }
  showPage(currentPage);
}

function showPreviousPage() {
  currentPage--;
  if (currentPage < 1) {
    currentPage = document.querySelectorAll('.page').length;
  }
  showPage(currentPage);
}


// counting


let currentPage2 = 1;
showPage2(currentPage2);

function showPage2(page2) {
  const pages2 = document.querySelectorAll('.page22');
  pages2.forEach(page2 => {
    page2.style.display = 'none';
  });
  pages2[page2 - 1].style.display = 'block';
}

function showNextPage2() {
  currentPage2++;
  if (currentPage2 > document.querySelectorAll('.page22').length) {
    currentPage2 = 1;
  }
  showPage2(currentPage2);
}

function showPreviousPage2() {
  currentPage2--;
  if (currentPage2 < 1) {
    currentPage2 = document.querySelectorAll('.page22').length;
  }
  showPage2(currentPage2);
}


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Reset error messages
  document.getElementById('nameError').textContent = '';
  document.getElementById('emailError').textContent = '';
  document.getElementById('messageError').textContent = '';

  // Get form values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Check if all fields are empty
  if (name === '' && email === '' && message === '') {
    alert('Please fill out the form before submitting.');
    return;
  }

  // Validate name
  if (name === '') {
    document.getElementById('nameError').textContent = 'Name is required';
    return;
  }

  // Validate email
  if (email === '') {
    document.getElementById('emailError').textContent = 'Email is required';
    return;
  } else if (!isValidEmail(email)) {
    document.getElementById('emailError').textContent = 'Invalid email address';
    return;
  }

  // Validate message
  if (message === '') {
    document.getElementById('messageError').textContent = 'Message is required';
    return;
  }

  // If all validations pass, you can submit the form or perform further actions here
  alert('Submitted successfully!');
});

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}






