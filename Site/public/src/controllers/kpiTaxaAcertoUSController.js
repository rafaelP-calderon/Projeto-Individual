var kpiTaxaAcertoUSModel = require("../models/kpiTaxaAcertoUSModel");

function kpiTaxaAcertoUS(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var email = req.params.email;

    // Faça as validações dos valores
    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        kpiTaxaAcertoUSModel.kpiTaxaAcertoUS(email)
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
    kpiTaxaAcertoUS
}