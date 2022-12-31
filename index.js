const playButton = document.getElementsByClassName("play")[0];
const resetButton = document.getElementsByClassName("reset")[0];
const lapButton = document.getElementsByClassName("lap")[0];
const clearButton = document.getElementsByClassName("lap-clear-button")[0];
const minute = document.getElementsByClassName("minute")[0];
const second = document.getElementsByClassName("sec")[0];
const Centisecond = document.getElementsByClassName("msec")[0];
const laps = document.getElementsByClassName("laps")[0];
const bg = document.getElementsByClassName("outer-square")[0]


const toggleButton = () => {
    resetButton.classList.remove("hidden")
    lapButton.classList.remove("hidden")
}

let isPlay = false;
let secCounter = 0;
let min;
let sec;
let CentiSec;
let lapItem = 0;
let centiCounter = 0;
let minCounter = 0;
let lapitem = 0;
let isReset = false;


const play = () => {
    if (!isPlay && !isReset) {
        playButton.innerHTML = 'Pause';
        bg.classList.add("animation-bg");
        min = setInterval(() => {
            minute.innerHTML = `&nbsp; ${++minCounter} :`;
        }, 60 * 1000);
        sec = setInterval(() => {
            if (secCounter === 60) {
                secCounter = 0;
            }
            second.innerHTML = `&nbsp; ${++secCounter} :`;
        }, 1000);
        CentiSec = setInterval(() => {
            if (centiCounter === 100) {
                centiCounter = 0;
            }
            Centisecond.innerHTML = `&nbsp; ${++centiCounter}`;
        }, 10);

        isPlay = true;
        isReset = true;
    } else {
        playButton.innerHTML = 'Play';
        clearInterval(min);
        clearInterval(sec);
        clearInterval(CentiSec);
        isPlay = false;
        isReset = false;
        bg.classList.remove("animation-bg");

    }
    toggleButton();
}

const reset = () => {
    secCounter = 0
    minCounter = 0
    isReset = true;
    play();
    lapButton.classList.add("hidden");
    resetButton.classList.add("hidden");
    second.innerHTML = '&nbsp;0 :'
    Centisecond.innerHTML = '&nbsp;0';
    minute.innerHTML = '0 :';
}

const lap = () => {
    const li = document.createElement("li");
    const number = document.createElement("span");
    const timeStamp = document.createElement("span");

    li.setAttribute("class", "lap-item");
    number.setAttribute("class", "number");
    timeStamp.setAttribute("class", "time-stamp");

    number.innerText = `${++lapItem}`;
    timeStamp.innerHTML = `${minCounter} : ${secCounter} : ${centiCounter}`;

    li.append(number, timeStamp);
    laps.append(li);

    clearButton.classList.remove("hidden");
}
const clearAll = () => {
    lapItem = 0;
    laps.innerHTML = '';
    laps.append(clearButton);
    clearButton.classList.add("hidden");
    lapitem = 0 * 57
}


playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
lapButton.addEventListener("click", lap);
clearButton.addEventListener("click", clearAll);