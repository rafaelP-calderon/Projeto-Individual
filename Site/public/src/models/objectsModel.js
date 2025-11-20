var database = require("../database/config");

function cadastrarObjects(palavra) {
    var instrucaoSql = `INSERT INTO questionario (palavra, pont) 
      VALUES ('${palavra}')`;

      return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarObjects
};