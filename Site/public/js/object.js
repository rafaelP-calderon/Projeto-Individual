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
    var erros = 0;

    displayLaterUK.style.display = 'none';
    displayLaterUSA.style.display = 'none';
    dialect.style.display = 'none';
    results.style.display = 'none';
    correctUK.style.display = 'none';
    correctUSA.style.display = 'none';
    displayNow.style.display = 'flex';

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
                if(i == 0 && respostas == objectsUSA[i].ans) {
                    imgUSA.src = '';
                    imgUSA.src = `${objectsUSA[i + 1].img}`;
                    acertos++;            
                    correctUSA.style.display = 'none';
                    acertou = true;
                } else if(i == 1 && respostas == objectsUSA[i].ans) {
                    imgUSA.src = '';
                    imgUSA.src = `${objectsUSA[i + 1].img}`;
                    acertos++;
                    correctUSA.style.display = 'none';
                    acertou = true;
                } else if(i == 2 && respostas == objectsUSA[i].ans) {
                    imgUSA.src = '';
                    imgUSA.src = `${objectsUSA[i + 1].img}`;
                    acertos++;
                    correctUSA.style.display = 'none';
                    acertou = true;
                } else if(i == 3 && respostas == objectsUSA[i].ans) {
                    imgUSA.src = '';
                    titleGame.style.display = 'none';
                    acertos++;
                    correctUSA.style.display = 'none';
                    displayNow.style.display = 'none';
                    displayLaterUSA.style.display = 'none';
                    results.innerHTML = `<h1>Resultados</h1>
                                        <p>Acertos: ${acertos}</p>
                                        <p>Erros: ${erros}</p>
                                        <div class="goBack">
                                            <a href="minigames.html"> 
                                                <i class="fa-solid fa-arrow-left"></i> 
                                                <p>Voltar</p> 
                                            </a>
                                        </div>`;
                    results.style.display = 'flex';
                    acertou = true;
                } 
            }

            if(!acertou) {
                erros++;
                alert("Erro");
            }
        }

    function responderUK() {
        var respostas = answerUK.value.toLowerCase().trim();
        var acertou = false;

            for (var i = 0; i < objectsUK.length; i++) {
                if(i == 0 && respostas == objectsUK[i].ans) {
                    imgUK.src = '';
                    imgUK.src = `${objectsUK[i + 1].img}`;
                    acertos++;            
                    correctUK.style.display = 'none';
                    acertou = true;
                } else if(i == 1 && respostas == objectsUK[i].ans) {
                    imgUK.src = '';
                    imgUK.src = `${objectsUK[i + 1].img}`;
                    acertos++;
                    correctUK.style.display = 'none';
                    acertou = true;
                } else if(i == 2 && respostas == objectsUK[i].ans) {
                    imgUK.src = '';
                    imgUK.src = `${objectsUK[i + 1].img}`;
                    acertos++;
                    correctUK.style.display = 'none';
                    acertou = true;
                } else if(i == 3 && respostas == objectsUK[i].ans) {
                    imgUK.src = '';
                    titleGame.style.display = 'none';
                    acertos++;
                    correctUK.style.display = 'none';
                    displayNow.style.display = 'none';
                    displayLaterUK.style.display = 'none';
                    results.innerHTML = `<h1>Resultados</h1>
                                        <p>Acertos: ${acertos}</p>
                                        <p>Erros: ${erros}</p>
                                        <div class="goBack">
                    <a href="minigames.html"> <i class="fa-solid fa-arrow-left"></i> <p>Voltar</p> </a>
                </div>  `;
                    results.style.display = 'flex';
                    acertou = true;
                } 
            }

            if(!acertou) {
                erros++;
                alert("Erro");
            }
        }