var database = require("../database/config");

function cadastrarObject(acertosUK, acertosUS, erros, pontuacao, fkUsuario) {
    var instrucaoSql = `insert into Sessao (acertosUK, acertosUSA, erros, pontuacao, fkUsuario) 
      values (${acertosUK}, ${acertosUS}, ${erros}, ${pontuacao}, ${fkUsuario})`;

      return database.executar(instrucaoSql);
}

module.exports = {
    cadastrarObject
};