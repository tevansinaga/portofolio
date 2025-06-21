// Example: highlight nav on scroll (bonus interactivity)
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-links a");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

const toggleBtn = document.getElementById('darkModeToggle');
const body = document.body;

// Cek preferensi dari localStorage
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
  toggleBtn.textContent = '☀️';
}

// Event klik toggle
toggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  const isDark = body.classList.contains('dark-mode');

  // Simpan preferensi
  localStorage.setItem('darkMode', isDark ? 'enabled' : 'disabled');

  // Ganti ikon
  toggleBtn.textContent = isDark ? '☀️' : '🌙';
});
