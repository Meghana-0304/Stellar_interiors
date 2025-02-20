document.addEventListener("DOMContentLoaded", function () {
  const seconds = document.querySelector(".seconds .number"),
    minutes = document.querySelector(".minutes .number"),
    hours = document.querySelector(".hours .number"),
    days = document.querySelector(".days .number");

  // Set the target release date (YYYY-MM-DDTHH:MM:SS)
  const launchDate = new Date("2025-03-01T00:00:00Z").getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    const dayValue = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hourValue = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minValue = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secValue = Math.floor((timeLeft % (1000 * 60)) / 1000);

    days.textContent = dayValue < 10 ? `0${dayValue}` : dayValue;
    hours.textContent = hourValue < 10 ? `0${hourValue}` : hourValue;
    minutes.textContent = minValue < 10 ? `0${minValue}` : minValue;
    seconds.textContent = secValue < 10 ? `0${secValue}` : secValue;
  }

  // Start the countdown and update every second
  const countdownInterval = setInterval(updateCountdown, 1000);
  updateCountdown(); // Initial call to avoid 1-second delay
});
