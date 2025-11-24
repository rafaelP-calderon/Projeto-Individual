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
                    valueUK.innerHTML = `${(resposta[0].taxaAcertoUK)}%`;
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
                        console.log(resposta);
                        
                        valueUS.innerHTML = `${resposta[0].taxaAcertoUS}%`;
                    }) 
                }
            })
    }

function graficoTaxaAcerto() {
    var email = sessionStorage.EMAIL_USUARIO;
    const ctx1 = document.getElementById('myChart1');

    var taxaUS = 0;
    var taxaUK = 0;

    fetch(`/kpiTaxaAcertoUS/kpiTaxaAcertoUS/${email}`)
        .then(res => res.json())
        .then(dataUS => {
            taxaUS = dataUS[0].taxaAcertoUS;

            return fetch(`/kpiTaxaAcertoUK/kpiTaxaAcertoUK/${email}`);
        })
        .then(res => res.json())
        .then(dataUK => {
            taxaUK = dataUK[0].taxaAcertoUK;

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

function inicializarDashboard () {
    kpiTaxaAcertoUS();
    kpiTaxaAcertoUK();
    graficoTaxaAcerto();
}