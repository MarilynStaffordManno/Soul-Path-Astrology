/* ============================================================
   SOUL PATH ASTROLOGY — Shared Scripts
   ============================================================ */

// Sticky nav scroll behavior (skip on pages where nav is always solid)
const nav = document.getElementById('mainNav');
if (nav && !nav.classList.contains('solid')) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  });
}

// Mobile menu toggle
const toggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
if (toggle && navLinks) {
  toggle.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => 
    a.addEventListener('click', () => navLinks.classList.remove('open'))
  );
}

// Generate stars in cosmic sections
function makeStars(containerId, count = 80, options = {}) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const { withGlow = false, withBig = true } = options;
  
  for (let i = 0; i < count; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    const roll = Math.random();
    let size;
    if (withBig && roll > 0.95) {
      // Big bright stars
      star.classList.add('big');
      size = Math.random() * 1.8 + 2.2;
    } else if (withGlow && roll > 0.88) {
      // Gold glow stars
      star.classList.add('glow');
      size = Math.random() * 1.5 + 1.8;
    } else if (roll > 0.7) {
      // Medium stars
      size = Math.random() * 1.4 + 1.2;
    } else {
      // Tiny stars
      size = Math.random() * 0.9 + 0.4;
    }
    
    star.style.width = size + 'px';
    star.style.height = size + 'px';
    star.style.top = Math.random() * 100 + '%';
    star.style.left = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 4 + 's';
    star.style.animationDuration = (Math.random() * 3 + 3) + 's';
    container.appendChild(star);
  }
  
  // Add occasional shooting stars (only on hero)
  if (options.shooting) {
    for (let i = 0; i < 2; i++) {
      const shoot = document.createElement('div');
      shoot.className = 'shooting-star';
      shoot.style.top = (Math.random() * 40) + '%';
      shoot.style.left = (Math.random() * 30) + '%';
      shoot.style.animationDelay = (i * 7 + Math.random() * 3) + 's';
      container.appendChild(shoot);
    }
  }
}

makeStars('stars', 160, { withGlow: true, withBig: true, shooting: true });
makeStars('starsGuide', 50, { withGlow: true });
makeStars('starsBook', 80, { withGlow: true, withBig: true });

// FAQ accordion
document.querySelectorAll('.faq-item').forEach(item => {
  item.addEventListener('click', () => item.classList.toggle('open'));
});
