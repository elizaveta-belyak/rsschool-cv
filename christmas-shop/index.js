function updateTimer() {
  const now = new Date();
  
  const currentYear = now.getUTCFullYear();
  const nextYear = currentYear + 1;
  const newYear = new Date(Date.UTC(nextYear, 0, 1));

  const diff = newYear - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  document.getElementById('days').textContent = d;
  document.getElementById('hours').textContent = h;
  document.getElementById('minutes').textContent = m;
  document.getElementById('seconds').textContent = s;
}

updateTimer();

setInterval(updateTimer, 1000);



/* --- БУРГЕР МЕНЮ --- */
const navOpenBtn = document.getElementById('nav-open');   // Иконка бургера
const navCloseBtn = document.getElementById('nav-close'); // Крестик в меню
const navMobileMenu = document.getElementById('nav-mobile'); // Само меню
const bodyElement = document.body;

if (navOpenBtn) {
    navOpenBtn.addEventListener('click', () => {
        navMobileMenu.classList.add('active');
        bodyElement.classList.add('noscroll');
    });
}

if (navCloseBtn) {
    navCloseBtn.addEventListener('click', () => {
        navMobileMenu.classList.remove('active');
        bodyElement.classList.remove('noscroll'); 
    });
}

const mobileMenuLinks = document.querySelectorAll('.nav-mobile__link');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMobileMenu.classList.remove('active');
        bodyElement.classList.remove('noscroll');
    });
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navMobileMenu.classList.remove('active');
        bodyElement.classList.remove('noscroll');
    }
});
