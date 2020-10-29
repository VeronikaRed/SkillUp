class Timer {
    constructor(){
        this.time = 0;
        this.interval = null;
    }
    start(){
        this.interval = setInterval(function(){
            document.getElementById('div').innerHTML = timer.time++;
            },1000)
    };
    stop(){
        clearInterval(this.interval);
        this.interval = null
    };
    reset(){
        this.time = 0;
        document.getElementById('div').innerHTML = timer.time;
    };
}

let timer = new Timer();

document.getElementById("stop").addEventListener('click', () =>{
timer.stop()
});

document.getElementById('reset').addEventListener('click', () =>{
    timer.reset()
});

document.getElementById('start').addEventListener('click', () =>{
    if(timer.interval == null){
        timer.start();
    } 
});