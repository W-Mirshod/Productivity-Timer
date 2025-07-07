let timer;
let time = 1500;
let running = false;
let currentMode = 'pomodoro';

const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');
const pomodoroBtn = document.getElementById('pomodoro');
const shortBreakBtn = document.getElementById('shortBreak');
const longBreakBtn = document.getElementById('longBreak');

function updateDisplay() {
  let m = Math.floor(time / 60);
  let s = time % 60;
  timerDisplay.textContent = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

function setMode(mode) {
  currentMode = mode;
  if (mode === 'pomodoro') time = 1500;
  if (mode === 'short') time = 300;
  if (mode === 'long') time = 900;
  document.querySelectorAll('.session-controls button').forEach(b => b.classList.remove('active'));
  if (mode === 'pomodoro') pomodoroBtn.classList.add('active');
  if (mode === 'short') shortBreakBtn.classList.add('active');
  if (mode === 'long') longBreakBtn.classList.add('active');
  updateDisplay();
  clearInterval(timer);
  running = false;
}

function startTimer() {
  if (running) return;
  running = true;
  timer = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(timer);
      running = false;
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  running = false;
}

function resetTimer() {
  setMode(currentMode);
}

startBtn.onclick = startTimer;
pauseBtn.onclick = pauseTimer;
resetBtn.onclick = resetTimer;
pomodoroBtn.onclick = () => setMode('pomodoro');
shortBreakBtn.onclick = () => setMode('short');
longBreakBtn.onclick = () => setMode('long');

setMode('pomodoro');
