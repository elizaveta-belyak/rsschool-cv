/* --- ТАЙМЕР --- */
function updateTimer() {
  const now = new Date();
  const nextYear = now.getUTCFullYear() + 1;
  const newYear = new Date(Date.UTC(nextYear, 0, 1));
  const diff = newYear - now;

  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);

  const daysElement = document.getElementById('days');
  if (daysElement) {
    daysElement.textContent = d;
    document.getElementById('hours').textContent = h;
    document.getElementById('minutes').textContent = m;
    document.getElementById('seconds').textContent = s;
  }
}
setInterval(updateTimer, 1000);
updateTimer();

/* --- БУРГЕР МЕНЮ --- */
const navOpenBtn = document.getElementById('nav-open');
const navCloseBtn = document.getElementById('nav-close');
const navMobileMenu = document.getElementById('nav-mobile');
const bodyElement = document.body;

function closeMenu() {
  navMobileMenu?.classList.remove('active');
  navOpenBtn?.classList.remove('active');
  bodyElement.classList.remove('noscroll');
}

if (navOpenBtn) {
  navOpenBtn.addEventListener('click', () => {
    navMobileMenu.classList.add('active');
    navOpenBtn.classList.add('active'); 
    bodyElement.classList.add('noscroll');
  });
}

navCloseBtn?.addEventListener('click', closeMenu);

// Закрытие по ссылкам
document.querySelectorAll('.nav-mobile__link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Закрытие при ресайзе
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) closeMenu();
});

/* СЛАЙДЕР */
const track = document.querySelector('.slider__track');
if (track) {
  const btnPrev = document.getElementById('btn-prev');
  const btnNext = document.getElementById('btn-next');
  const sliderWindow = document.querySelector('.slider__window');
  let currentStep = 0;

  function updateSlider() {
    const totalClicks = window.innerWidth > 768 ? 3 : 6;
    if (currentStep > totalClicks) currentStep = totalClicks;

    const stepSize = (track.scrollWidth - sliderWindow.offsetWidth) / totalClicks;
    track.style.transform = `translateX(-${currentStep * stepSize}px)`;

    btnPrev.disabled = (currentStep === 0);
    btnNext.disabled = (currentStep >= totalClicks);
  }

  btnNext.addEventListener('click', () => {
    const totalClicks = window.innerWidth > 768 ? 3 : 6;
    if (currentStep < totalClicks) { currentStep++; updateSlider(); }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep > 0) { currentStep--; updateSlider(); }
  });

  window.addEventListener('resize', () => {
    currentStep = 0;
    updateSlider();
  });
  updateSlider();
}

/* КНОПКА UP (только для страницы Gifts) */
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    if (window.innerWidth <= 768 && window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
