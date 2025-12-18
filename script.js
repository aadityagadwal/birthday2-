const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const targetDate = new Date("2025-12-18T18:30:00Z");

function updateCountdown() {
const now = new Date();
const diff = targetDate - now;

if (diff <= 0) {
daysEl.textContent = "00";
hoursEl.textContent = "00";
minutesEl.textContent = "00";
secondsEl.textContent = "00";
return;
}

const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((diff / (1000 * 60)) % 60);
const seconds = Math.floor((diff / 1000) % 60);

daysEl.textContent = String(days).padStart(2, "0");
hoursEl.textContent = String(hours).padStart(2, "0");
minutesEl.textContent = String(minutes).padStart(2, "0");
secondsEl.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);

/* Music logic */
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");
let musicStarted = false;

function startMusic() {
if (!musicStarted) {
music.play().catch(() => {});
musicStarted = true;
}
}

document.addEventListener("click", startMusic, { once: true });
document.addEventListener("touchstart", startMusic, { once: true });

musicBtn.addEventListener("click", (e) => {
e.stopPropagation();
if (music.paused) {
music.play();
musicBtn.textContent = "🔇";
} else {
music.pause();
musicBtn.textContent = "🔊";
}
});