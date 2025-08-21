const input = document.getElementById('numberInput');
const button = document.getElementById('checkButton');
const result = document.getElementById('result');

window.addEventListener('DOMContentLoaded', () => {
  document.getElementById('app').classList.add('animate');
});

button.addEventListener('click', () => {
  const value = input.value.trim();
  const number = parseInt(value);

  if (isNaN(number)) {
    result.textContent = "Please enter a valid number.";
    result.style.color = "red";
    document.body.style.backgroundColor = "#ffe6e6";
    input.classList.remove("shake");
    void input.offsetWidth; // Reflow trick to reset animation
    input.classList.add("shake");
  } else {
    const isEven = number % 2 === 0;
    result.textContent = isEven ? "It's even!" : "It's odd!";
    result.style.color = isEven ? "green" : "blue";
    document.body.style.backgroundColor = isEven ? "#e6ffe6" : "#e6f7ff";
    result.classList.remove("visible", "bounce"); // Reset if already applied
    void result.offsetWidth; // Reflow trick to reset animation
    result.classList.add("visible", "bounce");

  }
});
// This script checks if a number is odd or even and updates the result display.

