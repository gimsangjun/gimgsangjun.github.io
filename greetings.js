

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username"

const savedUserName = localStorage.getItem(USERNAME_KEY);
const clock = document.querySelector("h2#clock");

function getClock(){

    const date = new Date();
    const hours = String(date.getHours()).padStart(2,"0");
    const minutes = String(date.getMinutes()).padStart(2,"0");
    const seconds = String(date.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}` ;
}

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    clock.classList.remove("hidden");
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

getClock();
setInterval(getClock, 1000);

if(savedUserName === null){
    // show the form
    
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    // show the greetings
    paintGreeting(savedUserName);
    
}





//console.dir(document.querySelector("#login-form input"));
//document.querySelector("#login-form > input[type=text]:nth-child(2)")
