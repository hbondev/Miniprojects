let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;
let btnStart = document.querySelector(".btn-start");
let btnPause = document.querySelector(".btn-pause");
let btnReset = document.querySelector(".btn-reset");
function startTimer() {
  clearInterval(interval);
  btnStart.setAttribute("disabled", "");
  btnStart.innerText = "Start";
  interval = setInterval(() => {
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
      if (minutes === 60) {
        minutes = 0;
        hours++;
      }
    }
    document.getElementById("timer").innerText = getTime(
      hours,
      minutes,
      seconds
    );
  }, 1000);
}

function PauseTimer() {
  clearInterval(interval);
  btnStart.removeAttribute("disabled", "");
  btnStart.innerText = "Continue";
}
function ResetTimer() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById("timer").innerText = "00:00:00";
  flag = false;
  btnStart.removeAttribute("disabled", "");
}
function getTime(hour, min, second) {
  let time = `${hour < 10 ? "0" + hour : hour}:${min < 10 ? "0" + min : min}:${
    second < 10 ? "0" + second : second
  }`;
  return time;
}
