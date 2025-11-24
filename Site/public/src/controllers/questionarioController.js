var questionarioModel = require("../models/questionarioModel");

function cadastrarQuestionario(req, res) {
    var idade = req.body.idade;
    var dialeto = req.body.dialeto;
    var familiaridade = req.body.familiaridade;
    var frequencia = req.body.frequencia;
    var fkUsuario = req.body.fkUsuario;

    if (!idade || !dialeto || !familiaridade || !frequencia || !fkUsuario) {
        return res.status(400).send("Todos os campos são obrigatórios!");
    }

    questionarioModel.cadastrarQuestionario(idade, dialeto, familiaridade, frequencia, fkUsuario)
        .then(resultado => {
            res.status(201).json({ mensagem: "Questionário cadastrado com sucesso!" });
        })
        .catch(erro => {
            console.log("\nErro ao cadastrar questionário: ", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });
}

module.exports = {
    cadastrarQuestionario
};
