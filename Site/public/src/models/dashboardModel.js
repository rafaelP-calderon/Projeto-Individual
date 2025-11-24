function buscarQuestionario(idUsuario) {
    var instrucao = `
        select dialeto
        from questionario
        where fkUsuario = ${idUsuario};
    `;
    return database.executar(instrucao);
}
