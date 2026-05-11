// Typing Effect
const text = "Software Developer | Java | Frontend | Problem Solver";
let index = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

// Start typing effect after a short delay
setTimeout(typeEffect, 500);

// Custom Cursor Glow
const cursorGlow = document.getElementById("cursor-glow");

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth > 768) {
    cursorGlow.style.opacity = "1";
    // Center the glow on the cursor
    cursorGlow.style.left = `${e.clientX}px`;
    cursorGlow.style.top = `${e.clientY}px`;
  }
});

document.addEventListener("mouseleave", () => {
  cursorGlow.style.opacity = "0";
});

// Navbar Scroll Effect
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Mobile Menu Toggle
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  const icon = menuToggle.querySelector('i');
  if (navLinks.classList.contains("active")) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-xmark');
  } else {
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  }
});

// Close mobile menu when clicking a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove("active");
    const icon = menuToggle.querySelector('i');
    icon.classList.remove('fa-xmark');
    icon.classList.add('fa-bars');
  });
});

// Intersection Observer for Scroll Reveals & Skill Bars
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.15
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Add active class to reveal elements
      entry.target.classList.add('active');
      
      // If it's the skills section or contains skill bars, animate them
      const skillBars = entry.target.querySelectorAll('.skill-bar-fill');
      skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
      });
      
      // Optional: Stop observing once revealed
      // observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => {
  observer.observe(el);
});
