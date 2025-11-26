var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {    
    var instrucaoSql = `
        insert into Usuario (nome, email, senha, dtCadastro)
        VALUES ('${nome}', '${email}', '${senha}', NOW())
    `;

    return database.executar(instrucaoSql);
}

function autenticar(email, senha) {
    var instrucaoSql = `SELECT idUsuario, nome, email, senha FROM Usuario 
                        WHERE email = '${email}' AND senha = '${senha}';
                        `;

    return database.executar(instrucaoSql);
}

module.exports = {
    cadastrar,
    autenticar
};