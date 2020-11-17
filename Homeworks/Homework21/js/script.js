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

let timer = new Timer();

stopBtn.addEventListener('click', () => {
    timer.stop();
});

resetBtn.addEventListener('click', () => {
    timer.reset();
});

startBtn.addEventListener('click', () => {
    if (timer.interval == null) {
        timer.start();
    }
});
