var objectsUK = [
        { img: 'https://www.elevaconvip.com.br/wp-content/uploads/2020/03/hist%C3%B3ria-do-elevador-709x1024.png', ans: 'lift' },
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq-2baMyo3lmng__Q_aZjBD_Ps2ScQPUPrg&s', ans: 'wardrobe' },
        { img: 'https://images.tcdn.com.br/img/img_prod/39590/torneira_bica_movel_bancada_lavatorio_1166_classic_cromado_kimetais_2348_1_6beece5bb108b0feb66ba75148e67701_20210407103430.jpg', ans: 'tap' },
        { img: 'https://alfablock.com.br/img/construir-calcada.jpg?1601302168144', ans: 'pavement' },
        { img: 'https://papelariatributaria.agilecdn.com.br/76057-1_1.jpg', ans: 'rubber'}
    ];

    var objectsUSA = [
        { img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMq-2baMyo3lmng__Q_aZjBD_Ps2ScQPUPrg&s', ans: 'closet' },
        { img: 'https://alfablock.com.br/img/construir-calcada.jpg?1601302168144', ans: 'sidewalk' },
        { img: 'https://www.elevaconvip.com.br/wp-content/uploads/2020/03/hist%C3%B3ria-do-elevador-709x1024.png', ans: 'elevator' },
        { img: 'https://papelariatributaria.agilecdn.com.br/76057-1_1.jpg', ans: 'eraser'},
        { img: 'https://images.tcdn.com.br/img/img_prod/39590/torneira_bica_movel_bancada_lavatorio_1166_classic_cromado_kimetais_2348_1_6beece5bb108b0feb66ba75148e67701_20210407103430.jpg', ans: 'faucet' }
    ];

    imgUK.src = `${objectsUK[0].img}`;
    imgUSA.src = `${objectsUSA[0].img}`;

    var acertos = 0;
    var contadorUK = 0;
    var contadorUS = 0;
    var acertosUK = 0;
    var acertosUS = 0;
    var erros = 0;

    displayLaterUK.style.display = 'none';
    displayLaterUSA.style.display = 'none';
    dialect.style.display = 'none';
    results.style.display = 'none';
    correctUK.style.display = 'none';
    correctUSA.style.display = 'none';
    displayNow.style.display = 'flex';
    showTitle.style.display = 'flex';

    function sendAnswer() {
        displayNow.style.display = 'none';
        dialect.style.display = 'flex';
    }

    function usa() {
        dialect.style.display = 'none';
        displayLaterUSA.style.display = 'flex';
        contadorUS++;
    }

    function uk() {
        dialect.style.display = 'none';
        displayLaterUK.style.display = 'flex';
        contadorUK++;
        localStorage.setItem('contadorUK', contadorUK);
        console.log(contadorUK);
    }

    function responderUSA() {
    var respostas = answerUSA.value.toLowerCase().trim();
    var acertou = false;

    for (var i = 0; i < objectsUSA.length; i++) {
        if (respostas === objectsUSA[i].ans) {
            acertos++;
            acertosUS++;
            answerUSA.style.border = '1px solid #000000';
            correctUSA.style.display = 'none';
            acertou = true;

            console.log(acertosUS);

            answerUSA.value = '';

            if (i + 1 < objectsUSA.length) {
                imgUSA.src = objectsUSA[i + 1].img;
            } else {
                finalizarJogo();
            }
        }
    }
    if (!acertou) {
        erros++;
        answerUSA.style.border = '2px solid #ff0000';
        answerUSA.value = '';
    }    
}

    function finalizarJogo() {

    var total = acertos + erros;
    var pontuacao = total > 0 ? Math.round((acertos / total) * 100) : 0;
    console.log(contadorUK);

    displayLaterUSA.style.display = 'none';
    showTitle.style.display = 'none';
    displayLaterUK.style.display = 'none';

    results.innerHTML = `
        <h1>Resultados</h1>
        <p>Acertos: ${acertos}</p>
        <p>Erros: ${erros}</p>
        <div class="buttons">
            <button onclick="jogar()" style="width: 10vw">Jogar Novamente</button>
            <button onclick="redirecionar() style="width: 10vw"><a href="dashboard.html">Ver estatísticas</a></button>
        </div>
    `;
    results.style.display = 'flex';

    var fkUsuario = sessionStorage.getItem("idUsuario");

    fetch("/pontuacao/pontuacao", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            acertosUK,
            acertosUS,
            erros,
            pontuacao,
            fkUsuario
        })
    })
    .then(res => {
        if (res.ok) console.log("Pontuação salva com sucesso");
        else console.error("Erro ao salvar pontuação");
    })
    .catch(err => console.error(err));
}

    function responderUK() {
    var respostas = answerUK.value.toLowerCase().trim();
    var acertou = false;

    for (var i = 0; i < objectsUK.length; i++) {
        if (respostas === objectsUK[i].ans) {
            acertos++;
            acertosUK++;
            answerUK.style.border = '1px solid #000000';
            correctUK.style.display = 'none';
            acertou = true;

            answerUK.value = '';

            if (i + 1 < objectsUK.length) {
                imgUK.src = objectsUK[i + 1].img;
            } else {
                finalizarJogo();
            }
        }
    }

    if (!acertou) {
        erros++;
        answerUK.style.border = '2px solid #ff0000';
        answerUK.value = '';
    }
}

    function jogar() { 
        displayLaterUK.style.display = 'none'; 
        displayLaterUSA.style.display = 'none'; 
        dialect.style.display = 'none'; 
        results.style.display = 'none'; 
        correctUK.style.display = 'none'; 
        correctUSA.style.display = 'none'; 
        displayNow.style.display = 'flex'; 
        showTitle.style.display = 'flex'; 
        location.reload('object.html'); 
    }
                