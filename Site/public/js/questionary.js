welcome.innerHTML = `Olá, ${sessionStorage.USERNAME}`;

function send() {
    var idade = idadeUser.value;
    var dialeto = dialetoUser.value;
    var familiaridade = fam.value;
    var frequencia = freq.value;
    var fkUsuario = localStorage.getItem("idUsuario");

    if(!idade || !dialeto || !familiaridade || !frequencia) {
        alert("Preencha todos os campos!");
        return;
    }

    fetch("/questionario/cadastrarQuestionario", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            idade,
            dialeto,
            familiaridade,
            frequencia,
            fkUsuario
        })
    })
    .then(res => {
        if(res.ok) {
            alert("Questionário enviado com sucesso!");
            window.location = 'minigames.html';
        } else {
            alert("Erro ao enviar questionário");
        }
    })
    .catch(err => console.error(err));
}
