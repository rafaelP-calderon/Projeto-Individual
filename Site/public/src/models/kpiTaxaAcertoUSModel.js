var database = require("../database/config")

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function kpiTaxaAcertoUS(email) {    
    var instrucaoSql = `
        select taxaAcertoUS from vwTaxaAcertoUS
            where idUsuario = (select idUsuario from Usuario where email = '${email}');    
    `;

    return database.executar(instrucaoSql);
}

module.exports = {
    kpiTaxaAcertoUS
};