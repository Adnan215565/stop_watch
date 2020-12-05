//DOM Declared and Add Event
const stopWatchStart = document.getElementById("start").addEventListener("click",start);
const stopWatchReset = document.getElementById("reset").addEventListener("click",reset);
const stopWatchPause = document.getElementById("pause").addEventListener("click",pause);
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const body = document.querySelector(".bg");
const randomHexCode = document.querySelector("#random");


//Global Declared Value
let min;
let sec = 0;
let timer = null;
let watchTimeRunning = false;

//Function Declared Here
function start(){
    if(!watchTimeRunning){
    watchTimeRunning = true;
    timer = setInterval(()=>{
        sec++;
        let {second , min} = getTime(sec);
        minutes.textContent = min <10 ? ("0" + min) : min;
        seconds.textContent = second <10 ? ("0" + second) : second;

        //Color Generate
    function randomColor(){
        const color = Math.random();
        let hexCode = color.toString(16).slice(2,8);
        let hexColor = "#" + hexCode;
        body.style.backgroundColor = hexColor;
        randomHexCode.textContent = hexColor;
    }
    randomColor();
    
    },1000)
    }

}
function reset(){
    watchTimeRunning = false;
    clearInterval(timer);
    minutes.textContent = "00";
    seconds.textContent = "00";
    randomHexCode.textContent = "#9ee652";
    body.style.backgroundColor = "";
}
function pause(){
    watchTimeRunning = false;
    clearInterval(timer)
}
function getTime(sec){
    min = parseInt(sec / 60);
    let second = parseInt(sec % 60);
    return{
        min ,
        second,
    }
}

