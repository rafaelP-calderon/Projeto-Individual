var img = document.querySelector(".imgOverflow");
var msgSignup = document.querySelector(".accountCreated");
var msgLogin = document.querySelector(".accountLogIn");

function logIn() {
    img.classList.remove("imgOverflow");
    img.classList.add("right");

    setTimeout(() => {
        msgLogin.style.display = 'none';    
    }, 2000);
}

function logInInputs() {
    var validateEmail = emailLogin.value;
    var validatePasswd = confirmPasswdLogin.value;

    if(validateEmail.includes("@") && validateEmail.includes(".") && validatePasswd.length >= 8 && (validatePasswd.includes('!') 
        || validatePasswd.includes('#') || validatePasswd.includes('$') || validatePasswd.includes('%') || validatePasswd.includes('&')) ) {

        msgLogin.style.display = 'flex';
        msgLogin.style.color = '#00ff00';
        msgLogin.innerHTML = `Logado com sucesso! <img width="50px" src="/Site/public/assets/aguarde-pink3.gif">`;
        
        setTimeout(() => {
            window.location.href = "simulador.html";
        }, 2000);
    } else {
        msgLogin.style.display = 'flex';
        msgLogin.style.color = '#ff0000';
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
        }, 1000);

        setTimeout(() => {
            msgSignup.style.display = 'none';
        }, 2100);

    } else {
        alert("Por favor, preencha os campos corretamente.");
    }
    
}

function alreadyHave() {
    img.classList.remove("right");
    img.classList.add("imgOverflow");
}



