var database = require("../database/config");

function cadastrarObject(acertosUK, acertosUS, erros, pontuacao, fkUsuario) {
    var instrucaoSql = `INSERT INTO sessao (acertosUK, acertosUSA, erros, pontuacao, fkUsuario) 
      VALUES (${acertosUK}, ${acertosUS}, ${erros}, ${pontuacao}, ${fkUsuario})`;

      return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarObject
};