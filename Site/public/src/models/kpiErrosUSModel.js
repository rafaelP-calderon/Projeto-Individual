var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function kpiErrosUS(email) {    
    var instrucaoSql = `
        select totalErrosUS from vwErrosUS
        where idUsuario = (select idUsuario from Usuario where email = '${email}');    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    kpiErrosUS
};