document.addEventListener("DOMContentLoaded", function () {
  const seconds = document.querySelector(".seconds .number"),
    minutes = document.querySelector(".minutes .number"),
    hours = document.querySelector(".hours .number"),
    days = document.querySelector(".days .number");

  // Set the launch date (Ensure correct format & avoid timezone issues)
  const launchDate = new Date(Date.UTC(2025, 2, 1, 0, 0, 0)).getTime(); // March 1, 2025, 00:00:00 UTC

  function updateCountdown() {
    const now = new Date().getTime(); // Get current time in milliseconds
    const timeLeft = launchDate - now;

    if (timeLeft <= 0) {
      document.querySelector(".time-content").innerHTML = "<h2>We're Live!</h2>";
      clearInterval(countdownInterval);
      return;
    }

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
  updateCountdown(); // Run once immediately to avoid delay
});