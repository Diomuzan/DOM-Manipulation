window.addEventListener("load", (e) => {
    let index = new IndexController();
    index.init();
});

class IndexController {

init() {
        // Dit zijn de correcte gebruikersnaam en wachtwoord.
        let correctUsername = "example@gmail.com";
        let correctPassword = "testtest";
        
const loginForm = document.querySelector(".loginForm");
const userNameInput = document.querySelector(".name");
const passwordInput = document.querySelector(".password");

loginForm.addEventListener('submit' , (event) =>  {
event.preventDefault();
const userName = userNameInput.value;
const password = passwordInput.value;

if (userName ===  correctUsername && password === correctPassword) {
    loginForm.innerHTML = "Login success!";
    document.innerHTML("error-text").style.display = "none"; 

    
    
    
    } else { 
    userNameInput.classList.add("error");
    passwordInput.classList.add("error");
    document.getElementById("error-text").innerHTML = "Login mislukt";
    document.getElementById("error-text").style.color = "darkred";
    document.getElementByClassName("input name").className = document.getElementByClassName("error").className; // this adds the error class
    document.getElementByClassName("input password").className = document.getElementByClassName("error").className;
   
}});
}}