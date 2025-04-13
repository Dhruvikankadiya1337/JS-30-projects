

// const display = document.getElementById('display');
// const startBtn = document.getElementById('startBtn');
// const stopBtn = document.getElementById('stopBtn');
// const resetBtn = document.getElementById('resetBtn');

// let timer;
// let seconds = 0;
// let isRunning = false;

// function formatTime(sec) {
//   const hrs = Math.floor(sec / 3600);
//   const mins = Math.floor((sec % 3600) / 60);
//   const secs = sec % 60;
//   return (
//     String(hrs).padStart(2, '0') + ':' +
//     String(mins).padStart(2, '0') + ':' +
//     String(secs).padStart(2, '0')
//   );
// }

// function updateDisplay() {
//   display.textContent = formatTime(seconds);
// }

// startBtn.onclick = () => {
//   if (!isRunning) {
//     timer = setInterval(() => {
//       seconds++;
//       updateDisplay();
//     }, 1000);
//     isRunning = true;
//   }
// };

// stopBtn.onclick = () => {
//   clearInterval(timer);
//   isRunning = false;
// };

// resetBtn.onclick = () => {
//   clearInterval(timer);
//   isRunning = false;
//   seconds = 0;
//   updateDisplay();
// };

// updateDisplay();


let timer;
let seconds = 0;
let isRunning = false;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function formatTime(sec) {
  const hrs = Math.floor(sec / 3600);
  const mins = Math.floor((sec % 3600) / 60);
  const secs = sec % 60;
  return (
    String(hrs).padStart(2, '0') + ':' +
    String(mins).padStart(2, '0') + ':' +
    String(secs).padStart(2, '0')
  );
}

function updateDisplay() {
  display.textContent = formatTime(seconds);
}

startBtn.addEventListener('click', () => {
  if (!isRunning) {
    timer = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
    isRunning = true;
  }
});

stopBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
});

resetBtn.addEventListener('click', () => {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  updateDisplay();
});

updateDisplay();

