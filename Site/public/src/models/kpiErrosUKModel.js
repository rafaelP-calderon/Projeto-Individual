var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function kpiErrosUK(email) {    
    var instrucaoSql = `
        select totalErrosUk from vwErrosUK
        where idUsuario = (select idUsuario from Usuario where email = '${email}');    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    kpiErrosUK
};