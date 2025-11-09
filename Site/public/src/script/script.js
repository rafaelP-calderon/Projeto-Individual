var img = document.querySelector(".imgOverflow");
var msgSignup = document.querySelector(".accountCreated");
var msgLogin = document.querySelector(".accountLogIn");

function logIn() {
    img.classList.remove("imgOverflow");
    img.classList.add("right");
}

function logInInputs() {
    var validateEmail = emailLogin.value;
    var validatePasswd = confirmPasswdLogin.value;

    if(validateEmail.includes("@") && validateEmail.includes(".") && validatePasswd.length >= 8 && (validatePasswd.includes('!') 
        || validatePasswd.includes('#') || validatePasswd.includes('$') || validatePasswd.includes('%') || validatePasswd.includes('&')) ) {

        msgLogin.style.display = 'flex';
        
        setTimeout(() => {
            window.location.href = "learn.html";
        }, 2000);

        setTimeout(() => {
            msgLogin.style.display = 'none';
        }, 2020);
    } else {
        msgLogin.style.display = 'flex';
        msgLogin.style.color = 'red';
        msgLogin.innerHTML = 'Email e/ou senha incorretos';
    }
}
function signUp() {
    var validateUser = username.value;
    var validateEmail = emailUser.value;
    var validatePasswd = passwdUser.value;

    if(validateUser.length >= 3 && validateEmail.includes("@") && validateEmail.includes(".") && validatePasswd.length >= 8 && (validatePasswd.includes('!') 
        || validatePasswd.includes('#') || validatePasswd.includes('$') || validatePasswd.includes('%') || validatePasswd.includes('&')) ) {

        img.classList.remove("imgOverflow");
        img.classList.add("right");

        msgSignup.style.display = 'flex';
        
        setTimeout(() => {
            img.classList.remove("right");
            img.classList.add("imgOverflow");
        }, 2000);

        setTimeout(() => {
            msgSignup.style.display = 'none';
        }, 2100);

    } else {
        alert("Por favor, preencha os campos corretamente.");
    }
    
}

function alreadyHave () {
    img.classList.remove("right");
    img.classList.add("imgOverflow");
}


