router.get("/buscarQuestionario/:idUsuario", function (req, res) {
    var idUsuario = req.params.idUsuario;

    questionarioModel.buscarQuestionario(idUsuario)
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro);
        });
});
