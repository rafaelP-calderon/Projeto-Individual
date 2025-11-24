    const usBtn = document.querySelector('.usa');
    const ukBtn = document.querySelector('.uk');
    

    const us = document.querySelector('.aboutUsEnglish');
    const uk = document.querySelector('.aboutUKEnglish');
    

    const usFlag = document.querySelector('.usFlag');
    const ukFlag = document.querySelector('.ukFlag');
    

    function exibirUS() {
        us.style.display = 'flex';
        uk.style.display = 'none';
        usFlag.style.display = 'block';
    }
    function exibirUK() {
        us.style.display = 'none';
        uk.style.display = 'flex';
        ukFlag.style.display = 'block';
    }


    function leave() {
        us.style.display = 'none';
        uk.style.display = 'none';
        usFlag.style.display = 'none';
        ukFlag.style.display = 'none';
    }    
    
    
    
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

    fetch("/usuarios/autenticar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            emailServer: validateEmail,
            senhaServer: validatePasswd
        })
    })
    .then(resposta => {
        if (!resposta.ok) {
            msgLogin.style.display = 'flex';
            msgLogin.style.color = '#ff0000';
            msgLogin.innerHTML = 'Email e/ou senha inválidos';
        }
        return resposta.json();
    })
    .then(resultado => {
        localStorage.setItem("idUsuario", resultado.usuario.idUsuario);

        msgLogin.style.display = 'flex';
        msgLogin.style.color = '#00ff00';
        msgLogin.innerHTML = `Seja bem vindo, ${sessionStorage.USERNAME}! <img width="50px" src="/assets/aguarde-pink3.gif">`;

        setTimeout(() => {
            window.location.href = "learn.html";
        }, 2000);
    })
    .catch(erro => {
        console.error("ERRO NO LOGIN:", erro);
    });
    }


    function signUp() {
        var validateUser = username.value;
        var validateEmail = emailUser.value;
        var validatePasswd = passwdUser.value;

        sessionStorage.USERNAME = validateUser;
        console.log(sessionStorage.USERNAME);

        fetch("/usuarios/cadastrar", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                nomeServer: validateUser,
                emailServer: validateEmail,
                senhaServer: validatePasswd
            })
        })
        .then(resposta => {
            if (resposta.ok) {
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
            }   
            } else {
                alert("Erro ao realizar o cadastro.");
            }
        })
        .catch(erro => {
            console.error("Erro:", erro);
        });
    }

    function alreadyHave() {
        img.classList.remove("right");
        img.classList.add("imgOverflow");
    }

  function sumirMensagem() {
    cardErro.style.display = "none";
  }