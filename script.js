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

function confettiBurst() {
  const emojis = ["🎉", "🎊", "💖", "✨", "🎀"];
  for (let i = 0; i < 30; i++) {
    const confetti = document.createElement("span");
    confetti.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDelay = Math.random() * 0.5 + "s";
    document.getElementById("confetti").appendChild(confetti);

    setTimeout(() => confetti.remove(), 3000);
  }
}

confettiBurst();

