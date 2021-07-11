

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form Input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY ="username"

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreeting(username);
}

function paintGreeting(username){
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);


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