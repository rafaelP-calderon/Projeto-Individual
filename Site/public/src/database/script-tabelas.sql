create table Usuario (
	idUsuario int primary key auto_increment,
    nome varchar(90),
    email varchar(255) unique,
    senha varchar(90),
    dtCadastro datetime
);

create table Questionario (
	idQuestionario int primary key auto_increment,
    idade int,
    dialeto enum('Estadunidense', 'Britânico'),
    familiaridade varchar(45),
    frequencia varchar(45),
    fkUsuario int,
    constraint fkUsuarioQuestionario foreign key (fkUsuario) references Usuario(idUsuario)
);

create table Sessao (
	idSessao int primary key auto_increment,
    acertosDialetos int,
    errosDialetos int,
    mediaAcertos int,
    pontuacao int,
    fkUsuario int,
    constraint fkUsuarioSessao foreign key (fkUsuario) references Usuario(idUsuario)
);

create table Object (
	idObject int primary key auto_increment,
    palavra varchar(100)
);

create table Idioms (
	idIdioms int primary key auto_increment,
    expressao varchar(100),
    significado varchar(100)
);

create table sessaoObjeto (
	fkSessao int,
		constraint fkSessaoObjeto 
			foreign key (fkSessao) 
				references Sessao(idSessao),
    fkObject int,
		constraint fkObjectObjeto 
			foreign key (fkObject) 
				references Object(idObject),
    pontuacao int
);

create table sessaoIdioms (
	fkSessao int,
		constraint fkSessaoIdioms 
			foreign key (fkSessao) 
				references Sessao(idSessao),
    fkIdioms int,
		constraint fkIdiomsIdioms 
			foreign key (fkIdioms) 
				references Idioms(idIdioms),
    pontuacao int
);