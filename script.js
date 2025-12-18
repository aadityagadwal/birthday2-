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

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    music.volume = 0.6;
    music.play()
      .then(() => {
        isPlaying = true;
        musicBtn.textContent = "🔇";
      })
      .catch(err => {
        console.error("Audio blocked:", err);
        alert("Tap again to enable sound 🔊");
      });
  } else {
    music.pause();
    isPlaying = false;
    musicBtn.textContent = "🔊";
  }
});;

function burstConfetti(x, y) {
  const emojis = ["🎉", "🎊", "💖", "🎀"];
  
  for (let i = 0; i < 18; i++) {
    const confetti = document.createElement("span");
    confetti.className = "confetti";
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    const angle = Math.random() * Math.PI * 2;
    const distance = 60 + Math.random() * 40;

    confetti.style.left = x + "px";
    confetti.style.top = y + "px";
    confetti.style.transform =
      `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;

    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 1200);
  }
}

/* Burst on page load */
window.addEventListener("load", () => {
  burstConfetti(window.innerWidth / 2, window.innerHeight / 2);
});

/* Burst on tap / click */
window.addEventListener("pointerdown", (e) => {
  burstConfetti(e.clientX, e.clientY);
});
