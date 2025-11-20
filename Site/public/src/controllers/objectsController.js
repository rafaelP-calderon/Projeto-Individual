var objectsModel = require("../models/objectsModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var palavra = req.body.palavra;

    // Faça as validações dos valores
    if (palavra == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (pont == undefined) {
        res.status(400).send("Seu nome está undefined!");
    }

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        objectsModel.cadastrar(palavra)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\Erro ao registrar estatísticas: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }



module.exports = {
    cadastrar
}