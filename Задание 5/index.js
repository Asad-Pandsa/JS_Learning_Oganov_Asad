const counter = document.getElementById('counter');
const speedPlus = document.getElementById('speed_+');
const speedMinus = document.getElementById('speed_-');
const reset = document.getElementById('reset');
const body = document.body;

let minutes = 0;
let seconds = 0;
let speed = 1000; 
let interval;

function updateCounter() {
    seconds++;
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    counter.textContent = formatTime(minutes, seconds);
}

function formatTime(min, sec) {
    let m = min < 10 ? '0' + min : min;
    let s = sec < 10 ? '0' + sec : sec;
    return `${m}:${s}`;
}

function startTimer() {
    clearInterval(interval);
    interval = setInterval(updateCounter, speed);
}

startTimer();

// Speed +
speedPlus.addEventListener('click', () => {
    speed = speed / 2; // ускоряем в 2 раза
    body.style.backgroundColor = '#36d136ff'; 
    counter.style.color = '#e43838ff'; 
    startTimer();
});

// Speed -
speedMinus.addEventListener('click', () => {
    speed = speed * 3; // замедляем в 3 раза
    body.style.backgroundColor = '#e43838ff'; 
    counter.style.color = '#36d136ff'; 
    startTimer();
});

// Reset
reset.addEventListener('click', () => {
    body.style.backgroundColor = '#c9c8c8'; 
    counter.style.color = 'black'; 
    minutes = 0;
    seconds = 0;
    speed = 1000; 
    counter.textContent = formatTime(minutes, seconds);
    startTimer();
});
