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

    var palavra = objectsUK[0].ans;

    var acertos = 0;
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
    }

    function uk() {
        dialect.style.display = 'none';
        displayLaterUK.style.display = 'flex';
    }

    function responderUSA() {
    var respostas = answerUSA.value.toLowerCase().trim();
    var acertou = false;

    for (var i = 0; i < objectsUSA.length; i++) {
        if (respostas === objectsUSA[i].ans) {
            acertos++;
            answerUSA.style.border = '1px solid #000000';
            correctUSA.style.display = 'none';
            acertou = true;

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

    displayLaterUSA.style.display = 'none';
    showTitle.style.display = 'none';

    results.innerHTML = `
        <h1>Resultados</h1>
        <p>Acertos: ${acertos}</p>
        <p>Erros: ${erros}</p>
        <p>Pontuação: ${pontuacao}%</p>
        <button onclick="jogar()" style="margin-top: 1vw; width: 10vw">Jogar Novamente</button>
    `;
    results.style.display = 'flex';
}

    function responderUK() {
    var respostas = answerUK.value.toLowerCase().trim();
    var acertou = false;

    for (var i = 0; i < objectsUK.length; i++) {
        if (respostas === objectsUK[i].ans) {
            acertos++;
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
                