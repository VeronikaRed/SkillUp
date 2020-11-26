class Timer {
    constructor() {
        this.time = 0;
        this.interval = null;
    }
    start() {
        this.interval = setInterval(function () {
            div.innerHTML = timer.time++;
        }, 1000);
    }
    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
    reset() {
        this.time = 0;
        div.innerHTML = timer.time;
    }
}

let addListeners = timerObj => {
    stopBtn.addEventListener('click', () => {
        timerObj.stop();
    });

    resetBtn.addEventListener('click', () => {
        timerObj.reset();
    });

    startBtn.addEventListener('click', () => {
        if (timerObj.interval == null) {
            timerObj.start();
        }
    });
};

let timer = new Timer();
addListeners(timer);
