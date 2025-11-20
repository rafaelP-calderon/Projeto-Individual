const usBtn = document.querySelector('.usa');
    const ukBtn = document.querySelector('.uk');
    const aussieBtn = document.querySelector('.aussie');

    const us = document.querySelector('.aboutUsEnglish');
    const uk = document.querySelector('.aboutUKEnglish');
    const aus = document.querySelector('.aboutAussieEnglish');

    const usFlag = document.querySelector('.usFlag');
    const ukFlag = document.querySelector('.ukFlag');
    const aussieFlag = document.querySelector('.aussieFlag');

    function exibirUS() {
        us.style.display = 'flex';
        uk.style.display = 'none';
        aus.style.display = 'none';
        usFlag.style.display = 'block';
    }
    function exibirUK() {
        us.style.display = 'none';
        uk.style.display = 'flex';
        aus.style.display = 'none';
        ukFlag.style.display = 'block';
    }
    function exibirAussie() {
        us.style.display = 'none';
        uk.style.display = 'none';
        aus.style.display = 'flex';
        aussieFlag.style.display = 'block';
    }

    function leave() {
        us.style.display = 'none';
        uk.style.display = 'none';
        aus.style.display = 'none';
        usFlag.style.display = 'none';
        ukFlag.style.display = 'none';
        aussieFlag.style.display = 'none';
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
        if (resposta.ok) {
            msgLogin.style.display = 'flex';
            msgLogin.style.color = '#00ff00';
            msgLogin.innerHTML = `Logado com sucesso! <img width="50px" src="/assets/aguarde-pink3.gif">`;

            setTimeout(() => {
                window.location.href = "learn.html";
            }, 2000);
        } else {
            msgLogin.style.display = 'flex';
            msgLogin.style.color = '#ff0000';
            msgLogin.innerHTML = 'Email e/ou senha inválidos';
        }
    })
    .catch(erro => {
        console.error("ERRO NO LOGIN:", erro);
        msgLogin.style.display = 'flex';
        msgLogin.style.color = 'red';
        msgLogin.innerHTML = 'Erro no servidor.';
    });
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
                alert("Cadastro realizado com sucesso!");
                window.location.href = "login.html";
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