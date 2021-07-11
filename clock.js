const clock = document.querySelector("h2#clock");

savedUserName = localStorage.getItem("username");

function getClock(){

    if(savedUserName !==null){
        clock.classList.remove("hidden");
    }
    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}` ;
}


getClock();
setInterval(getClock, 1000);


