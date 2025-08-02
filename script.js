let currentSlide = 0;
const slides = document.querySelectorAll('.slides');

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Slider loop
showSlide(currentSlide);
setInterval(nextSlide, 5000);

// Hamburger toggle
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('show');
}

// About Us Slider
let currentAboutSlide = 0;

function setAboutSlide(index) {
  const slides = document.querySelectorAll('.about-slider .slide');
  const dots = document.querySelectorAll('.slider-dots .dot');

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
    dots[i].classList.toggle('active', i === index);
  });

  currentAboutSlide = index;
}

// Optional: Auto-slide
setInterval(() => {
  currentAboutSlide = (currentAboutSlide + 1) % 2;
  setAboutSlide(currentAboutSlide);
}, 5000);

// Testimoni Slider
let testiIndex = 0;

function setTestiSlide(index) {
  const track = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.testimoni-card');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const cardWidth = cards[0].offsetWidth + 20;

  testiIndex = index;

  track.style.transform = `translateX(-${index * cardWidth * 3}px)`;

  dots.forEach(dot => dot.classList.remove('active'));
  if (dots[index]) dots[index].classList.add('active');
}

// Auto Slide (optional)
setInterval(() => {
  testiIndex = (testiIndex + 1) % 2; // jumlah slide penuh = 2
  setTestiSlide(testiIndex);
}, 6000);

document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message! We will contact you soon.');
  this.reset();
});

