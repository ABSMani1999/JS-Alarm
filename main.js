   var music = new Audio("SMS BABY(1).mp3");
   var setBtn = document.querySelector(".set"); 
   var stopBtn = document.querySelector(".stop");
   var input = document.querySelector("input");
   var pEle = document.querySelector("p");
   
setBtn.addEventListener("click",setAlarm);
function setAlarm(){
    var date = new Date();
    var currentHour = date.getHours();
    var currentMinutes = date.getMinutes();
    var inputValue = input.value;

    currentHour = currentHour >= 10 ? currentHour : "0"+ currentHour;
    currentMinutes = currentMinutes >= 10 ? currentMinutes : "0"+ currentMinutes;
    currentTime = `${currentHour}:${currentMinutes}`;
    var timeClear = setTimeout(setAlarm,1000);
    if(inputValue == currentTime){
        music.play();
        clearInterval(timeClear);
        music.loop = true;
            var autoStopAlram = setInterval(autoStop,300000);
            function autoStop(){
                music.loop = false;
                pEle.innerHTML = "Sorry you missed the clock...!";
                clearInterval(autoStopAlram);
            }
    }       
}

stopBtn.addEventListener("click",stopAlarm);
function stopAlarm(){
    music.pause();
    
}


