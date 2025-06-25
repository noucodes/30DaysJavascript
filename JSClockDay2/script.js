const clockFace = document.querySelector(".clock-face");
var dialLines = document.querySelectorAll(".diallines");
const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".min-hand");
const secondHand = document.querySelector(".second-hand");

for (let i = 1; i < 60; i++) {
  const line = document.createElement("div");
  line.className = "diallines";
  line.style.transform = `rotate(${6 * i}deg)`;
  clockFace.appendChild(line);
}

function setDate() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  const hDeg = hour * 30 + minute * (360 / 720);

  const mDeg = minute * 6 + second * (360 / 3600);

  const sDeg = second * 6;

  hourHand.style.transform = `rotate(${hDeg}deg)`;
  minuteHand.style.transform = `rotate(${mDeg}deg)`;
  secondHand.style.transform = `rotate(${sDeg}deg)`;
  console.log(hourHand, minuteHand, secondHand);
}

setInterval(setDate, 1000);
