// DS BENDA & ASSOCIATES - Master Interactive Engine
// Contact: +91 7404317320 | Email: dsbenda.com@gmail.com

const CA_PHONE = "917404317320";

// Theme Switcher Engine
function initThemeToggle() {
  const toggleBtn = document.getElementById('theme-toggle-btn');
  const html = document.documentElement;

  const savedTheme = localStorage.getItem('dsb_theme') || 'light';
  if (savedTheme === 'dark') {
    html.classList.add('dark');
    html.classList.remove('light');
    if (toggleBtn) toggleBtn.innerHTML = `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>`;
  } else {
    html.classList.remove('dark');
    html.classList.add('light');
    if (toggleBtn) toggleBtn.innerHTML = `<i data-lucide="moon" class="w-5 h-5 text-slate-700 dark:text-slate-200"></i>`;
  }

  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      const isDark = html.classList.toggle('dark');
      html.classList.toggle('light', !isDark);
      localStorage.setItem('dsb_theme', isDark ? 'dark' : 'light');
      
      toggleBtn.innerHTML = isDark 
        ? `<i data-lucide="sun" class="w-5 h-5 text-amber-400"></i>`
        : `<i data-lucide="moon" class="w-5 h-5 text-slate-700"></i>`;
      
      if (window.lucide) lucide.createIcons();
    });
  }
}

// Cursor Ambient Spotlight Engine
function initCursorSpotlight() {
  const spotlight = document.createElement('div');
  spotlight.className = 'cursor-spotlight';
  document.body.appendChild(spotlight);

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateSpotlight() {
    currentX += (mouseX - currentX) * 0.1;
    currentY += (mouseY - currentY) * 0.1;

    const isDark = document.documentElement.classList.contains('dark');
    const color = isDark ? 'rgba(234, 179, 8, 0.12)' : 'rgba(234, 179, 8, 0.06)';

    spotlight.style.background = `radial-gradient(600px circle at ${currentX}px ${currentY}px, ${color}, transparent 80%)`;
    requestAnimationFrame(animateSpotlight);
  }
  animateSpotlight();
}

// Contact Form Handler (Direct WhatsApp Redirect)
function initContactForm() {
  const form = document.getElementById('lead-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('lead-name').value;
    const phone = document.getElementById('lead-phone').value;
    const service = document.getElementById('lead-service').value;

    const text = encodeURIComponent(
      `Namaste DS BENDA & ASSOCIATES!\n\nNew Service Inquiry:\n• Client/Firm: ${name}\n• Phone: ${phone}\n• Service Required: ${service}\n\nPlease share details and Fee Quote.`
    );
    
    window.open(`https://wa.me/${CA_PHONE}?text=${text}`, '_blank');
    form.reset();
  });
}

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCursorSpotlight();
  initContactForm();
  if (window.lucide) lucide.createIcons();
});
