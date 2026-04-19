/* ТАЙМЕР */
function updateTimer() {
  const elD = document.getElementById('days');
  const elH = document.getElementById('hours');
  const elM = document.getElementById('minutes');
  const elS = document.getElementById('seconds');

  if (!elD || !elH || !elM || !elS) return;

  const now = new Date();
  const diff = new Date(Date.UTC(now.getUTCFullYear() + 1, 0, 1)) - now;

  elD.textContent = Math.floor(diff / 86400000);
  elH.textContent = Math.floor((diff / 3600000) % 24);
  elM.textContent = Math.floor((diff / 60000) % 60);
  elS.textContent = Math.floor((diff / 1000) % 60);
}
setInterval(updateTimer, 1000);
updateTimer();

/* БУРГЕР МЕНЮ */
const navBtn = document.getElementById('nav-open');
const navMenu = document.getElementById('nav-mobile');

function closeMenu() {
  navMenu?.classList.remove('active');
  navBtn?.classList.remove('active');
  document.body.classList.remove('noscroll');
}

navBtn?.addEventListener('click', () => {
  const isOpening = !navMenu.classList.contains('active');
  navMenu.classList.toggle('active');
  navBtn.classList.toggle('active');
  document.body.classList.toggle('noscroll', isOpening);
});

document.querySelectorAll('.nav-mobile__link').forEach(link => {
  link.addEventListener('click', closeMenu);
});

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

  const getSteps = () => window.innerWidth > 768 ? 3 : 6;

  function updateSlider() {
    const steps = getSteps();
    if (currentStep > steps) currentStep = steps;

    const stepSize = (track.scrollWidth - sliderWindow.offsetWidth) / steps;
    track.style.transform = `translateX(-${currentStep * stepSize}px)`;

    btnPrev.disabled = (currentStep === 0);
    btnNext.disabled = (currentStep >= steps);
  }

  btnNext.addEventListener('click', () => {
    if (currentStep < getSteps()) { currentStep++; updateSlider(); }
  });

  btnPrev.addEventListener('click', () => {
    if (currentStep > 0) { currentStep--; updateSlider(); }
  });

  window.addEventListener('resize', updateSlider);
  updateSlider();
}

/* КНОПКА UP */
const backToTopBtn = document.getElementById('backToTop');
if (backToTopBtn) {
  window.addEventListener('scroll', () => {
    backToTopBtn.classList.toggle('show', window.scrollY > 300);
  });

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
