var database = require("../database/config");

function cadastrarQuestionario(idade, dialeto, familiaridade, frequencia, fkUsuario) {
    var instrucaoSql = `INSERT INTO questionario (idade, dialeto, familiaridade, frequencia, fkUsuario) 
      VALUES ('${idade}', '${dialeto}', '${familiaridade}', '${frequencia}', '${fkUsuario}')`;

      return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarQuestionario
};