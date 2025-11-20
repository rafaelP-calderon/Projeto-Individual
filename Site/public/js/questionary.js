function send() {
    var idade = document.getElementById("idade").value;
    var dialeto = document.getElementById("dialeto").value;
    var familiaridade = document.getElementById("familiaridade").value;
    var frequencia = document.getElementById("frequência").value;
    var fkUsuario = localStorage.getItem("idUsuario");

    if(!idade || !dialeto || !familiaridade || !frequencia) {
        alert("Preencha todos os campos!");
        return;
    }

    fetch("/questionario/cadastrar", {
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
        } else {
            alert("Erro ao enviar questionário");
        }
    })
    .catch(err => console.error(err));
}
