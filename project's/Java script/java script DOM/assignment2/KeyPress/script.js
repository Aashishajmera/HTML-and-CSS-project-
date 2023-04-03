const input = document.querySelector("input");
const log = document.getElementById("log");

input.addEventListener("keypress", logKey);

function logKey(e) {
  log.textContent += ` ${e.code}`;
}