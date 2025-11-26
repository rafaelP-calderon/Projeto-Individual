var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function kpiTaxaAcertoUK(email) {    
    var instrucaoSql = `
        select PontuacaoUK from vwTaxaAcertoUK 
            where idUsuario = (select idUsuario from Usuario where email = '${email}');    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    kpiTaxaAcertoUK
};