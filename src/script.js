/* ============================================
   KURIL PORTFOLIO — INTERACTIVE SCRIPT
   ============================================ */

// ===== GLOBAL SELECTORS =====
const nav = document.querySelector('.navbar');
const navLinks = document.querySelector('.nav-links');
const navToggle = document.createElement('button');
const themeToggle = document.createElement('button');
const cursor = document.createElement('div');

// ===== SETUP NAV TOGGLE =====
navToggle.className = 'nav-toggle';
navToggle.setAttribute('aria-label', 'Toggle Navigation');
navToggle.innerHTML = '<span></span><span></span><span></span>';
nav.appendChild(navToggle);

// ===== THEME TOGGLE =====
themeToggle.className = 'theme-toggle';
themeToggle.setAttribute('aria-label', 'Toggle Dark/Light Theme');
themeToggle.innerHTML = '🌙';
nav.appendChild(themeToggle);

// ===== CUSTOM CURSOR =====
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

// ===== NAV MENU LOGIC =====
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('open');
});

// Close nav when link clicked (mobile)
navLinks.querySelectorAll('a').forEach(link =>
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('open');
  })
);

// ===== THEME TOGGLE LOGIC =====
const setTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  themeToggle.innerHTML = theme === 'dark' ? '☀️' : '🌙';
};

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
setTheme(savedTheme);

themeToggle.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// ===== SCROLL REVEAL ANIMATIONS =====
const revealElements = document.querySelectorAll(
  '.section-title, .section-subtitle, .project-card, .skills-list li, .about-text, .about-photo-wrapper, .contact-form'
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// ===== PROJECT CARD 3D TILT =====
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
  });

  card.addEventListener('mouseleave', () => {
    card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
  });
});

// ===== SKILL BAR ANIMATION =====
const skillElements = document.querySelectorAll('.skills-list .skill');
const animateSkills = () => {
  skillElements.forEach((el, index) => {
    setTimeout(() => el.classList.add('animate-skill'), index * 150);
  });
};
window.addEventListener('scroll', () => {
  const skillsSection = document.querySelector('#skills');
  const sectionTop = skillsSection.getBoundingClientRect().top;
  if (sectionTop < window.innerHeight - 100) animateSkills();
});

// ===== CUSTOM CURSOR =====
document.addEventListener('mousemove', e => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button, .btn').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
});

// ===== SCROLL SHADOW ON NAV =====
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

/* ===== OPTIONAL: SMOOTH SCROLL ===== */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
