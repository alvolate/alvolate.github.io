const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const greeting = document.querySelector("#greeting");
const toDo = document.querySelector("#todo-form");
const hidden="hidden";


function onLoginSubmit(tomato){
    
    tomato.preventDefault();
    loginForm.classList.add(hidden);
    const username= loginInput.value;
    console.log(loginInput.value);
    paintGreetings(username);
    localStorage.setItem("username",username);
}

function paintGreetings(savedUserName){
    greeting.classList.remove(hidden);
    toDo.classList.remove(hidden);
    greeting.innerText = `Hello ${savedUserName}`;
}


const savedUserName= localStorage.getItem("username");

if(savedUserName=== null){
    //show the form
    loginForm.classList.remove(hidden);
    loginForm.addEventListener("submit",onLoginSubmit);
}
else{
    //show the greetings
    paintGreetings(savedUserName);

}