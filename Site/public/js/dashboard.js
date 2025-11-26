function goBack () {
    window.location = 'learn.html';
}

welcome.innerHTML = `Olá, ${sessionStorage.USERNAME}`;

function kpiTaxaAcertoUK () {
    var email = sessionStorage.EMAIL_USUARIO;

    fetch(`/kpiTaxaAcertoUK/kpiTaxaAcertoUK/${email}`)
        .then(function(response) {
            if(response.ok) {
                response.json().then(function(resposta) {
                    console.log(resposta);
                    valueUK.innerHTML = `${(resposta[resposta.length - 1].PontuacaoUK)}%`;
                }) 
            }
        })
}

function kpiTaxaAcertoUS () {
        var email = sessionStorage.EMAIL_USUARIO;
        fetch(`/kpiTaxaAcertoUS/kpiTaxaAcertoUS/${email}`)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(resposta) {
                        console.log(resposta[0]);
                        
                        valueUS.innerHTML = `${resposta[resposta.length - 1].PontuacaoUS}%`;
                    }) 
                }
            })
    }

function kpiErrosUK () {
    var email = sessionStorage.EMAIL_USUARIO;
        fetch(`/kpiErrosUK/kpiErrosUK/${email}`)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(resposta) {
                        console.log(resposta[0]);
                        
                        valueUKError.innerHTML = `${resposta[resposta.length - 1].totalErrosUk} erros`;
                    }) 
                }
            })
}

function kpiErrosUS () {
    var email = sessionStorage.EMAIL_USUARIO;
        fetch(`/kpiErrosUS/kpiErrosUS/${email}`)
            .then(function(response) {
                if(response.ok) {
                    response.json().then(function(resposta) {
                        console.log(resposta[0]);
                        
                        valueUSError.innerHTML = `${resposta[resposta.length - 1].totalErrosUS} erros`;
                    }) 
                }
            })
}

function graficoTaxaAcerto() {
    var email = sessionStorage.EMAIL_USUARIO;
    const ctx1 = document.getElementById('myChart1');

    var taxaUS = 0;
    var taxaUK = 0;
    var dialeto = '';

    fetch(`/kpiTaxaAcertoUS/${email}`)
        .then(res => res.json())
        .then(dataUS => {
            taxaUS = dataUS[dataUS.length - 1].PontuacaoUS;

            if(taxaUS < 60) {
                valueUS.style.color = '#ff0000';
            } else if(taxaUS >= 60 && taxaUS < 80) {
                valueUS.style.color = 'yellow';
            } else {
                valueUS.style.color = 'green';
            }

            return fetch(`/kpiTaxaAcertoUK/kpiTaxaAcertoUK/${email}`);
        })
        .then(res => res.json())
        .then(dataUK => {
            taxaUK = dataUK[dataUK.length - 1].PontuacaoUK;

            if(taxaUK < 60) {
                valueUK.style.color = '#ff0000';
            } else if(taxaUK >= 60 && taxaUK < 80) {
                valueUK.style.color = 'yellow';
            } else {
                valueUK.style.color = 'green';
            }

            if(taxaUK < taxaUS) {
                dialeto = 'Britânico';
            } else if(taxaUK > taxaUS){
                dialeto = 'Estadunidense';
            } else {
                dialeto = 'Igual';
            }

            dialectChosen.innerHTML = `${dialeto}`;

            new Chart(ctx1, {
                type: 'bar',
                data: {
                    labels: ['US English', 'UK English'],
                    datasets: [{
                        label: 'Acertos por Dialeto',
                        data: [taxaUS, taxaUK],
                        backgroundColor: ['#4169E1', '#E63946'],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        })
        .catch(err => console.error("Erro:", err));
}

function graficoErrosTotais() {
    var email = sessionStorage.EMAIL_USUARIO;
    const ctx = document.getElementById('myChart');

    var errosUS = 0;
    var errosUK = 0;

    fetch(`/kpiErrosUS/kpiErrosUS/${email}`)
        .then(res => res.json())
        .then(dataUS => {
            errosUS = dataUS[0].totalErrosUS;

            if(errosUS < 10) {
                valueUSError.style.color = 'green';
            } else if(errosUS > 10 && errosUS < 20) {
                valueUSError.style.color = 'yellow';
            } else {
                valueUSError.style.color = '#ff0000';
            }

            return fetch(`/kpiErrosUK/kpiErrosUK/${email}`);
        })
        .then(res => res.json())
        .then(dataUK => {
            errosUK = dataUK[0].totalErrosUk;

            if(errosUK < 10) {
                valueUKError.style.color = 'green';
            } else if(errosUK > 10 && errosUK < 20) {
                valueUKError.style.color = 'yellow';
            } else {
                valueUKError.style.color = '#ff0000';
            }

            new Chart(ctx, {
                type: 'bar',
                data: {
                    labels: ['US English', 'UK English'],
                    datasets: [{
                        label: 'Erros por Dialeto',
                        data: [errosUS, errosUK],
                        backgroundColor: ['#4169E1', '#E63946'],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    indexAxis: 'y',  
                    scales: {
                        x: {
                            beginAtZero: true 
                        }
                    }
                }
            });
        })
        .catch(err => console.error("Erro:", err));
}


function inicializarDashboard () {
    kpiTaxaAcertoUS();
    kpiTaxaAcertoUK();
    graficoTaxaAcerto();
    graficoErrosTotais();
    kpiErrosUK();
    kpiErrosUS();
}