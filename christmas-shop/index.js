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
