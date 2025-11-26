var pontuacaoModel = require("../models/pontuacaoModel");

function cadastrarObject(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontuacao = req.body.pontuacao;
    var acertosUK = req.body.acertosUK;
    var acertosUS = req.body.acertosUS;
    var erros = req.body.erros;
    var fkUsuario = req.body.fkUsuario;

    // Faça as validações dos valores
    if (pontuacao == undefined || acertosUK == undefined || erros == undefined || pontuacao == undefined || fkUsuario == null) {
        return res.status(400).send("Dados ausentes.");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        pontuacaoModel.cadastrarObject(acertosUK, acertosUS, erros, pontuacao, fkUsuario)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrarObject
}