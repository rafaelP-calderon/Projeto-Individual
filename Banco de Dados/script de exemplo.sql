create table Usuario (
	idUsuario int primary key auto_increment,
    nome varchar(90),
    email varchar(100),
    senha varchar(100),
    dtCadastro datetime
);

create table Formulario (
	idFormulario int primary key auto_increment,
    idade int,
    dialeto varchar(45),
    familiaridade varchar(45),
    frequencia varchar(45),
    fkUsuario int,
    constraint fkUsuarioFormulario foreign key (fkUsuario) references Usuario(idUsuario)
);

create table Object (
	idObject int primary key auto_increment,
    palavra varchar(45)
);

create table Idioms (
	idIdioms int primary key auto_increment,
    expressao varchar(100),
    significado varchar(100)
);

create table Sessao (
	idSessao int primary key auto_increment,
    acertosDialetos int,
    errosDialetos int,
    mediaAcertos decimal(4, 2),
    dialeto enum('UK', 'US', 'AUS'),
    pontuacao int,
    fkUsuario int,
    constraint fkUsuarioSessao foreign key (fkUsuario) references Usuario(idUsuario)
);

create table SessaoObject (
    idSessaoObject int primary key auto_increment,
    fkSessao int,
    fkObject int,
    pontuacao int,
    constraint fkSessaoSessaoObject foreign key (fkSessao) references Sessao(idSessao),
    constraint fkObjectSessaoObject foreign key (fkObject) references Object(idObject)
);

create table SessaoIdioms (
    idSessaoIdioms int primary key auto_increment,
    pontuacao int,
    fkIdioms int,
    fkSessao int,
    constraint fkSessaoSessaoIdioms foreign key (fkSessao) references Sessao(idSessao),
    constraint fkIdiomsSessaoIdioms foreign key (fkIdioms) references Idioms(idIdioms)
);

-- select u.nome as Nome, f.idade as Idade, f.dialeto as Dialeto
-- 	from Usuario as u join Formulario as f 
--     on fkUsuario = idUsuario;
    
-- select u.nome as Usuário, s.pontuacao as Pontuação 
-- 	from Usuario as u join Sessao as s
--     on fkUsuario = idUsuario;
    
-- select u.nome as Usuário, s.dialeto as Dialeto, so.pontuacao as Pontuação
-- 	from Usuario as u join Sessao as s on u.idUsuario = s.fkUsuario
--     join SessaoObject as so on so.fkSessao = s.idSessao;
    
-- select u.nome as Usuário, s.dialeto as Dialeto, i.expressao as 'Expressão de Maior Dificuldade', si.pontuacao as Pontuação
-- 	from Usuario as u join Sessao as s on u.idUsuario = s.fkUsuario
--     join SessaoIdioms as si on si.fkSessao = s.fkUsuario
--     join Idioms as i on si.fkIdioms = idIdioms;
    
-- select u.nome as Usuário, sum(so.pontuacao + si.pontuacao) as 'Pontuação Total' 
-- 	from Usuario as u join Sessao as s on u.idUsuario = s.fkUsuario
--     join SessaoObject as so on so.fkSessao = s.idSessao
--     join SessaoIdioms as si on si.fkSessao = s.idSessao
--     group by u.nome;

-- select u.nome as Usuário, s.dialeto, s.acertosDialetos, s.errosDialetos, 
-- 	round((s.acertosDialetos / (s.acertosDialetos + s.errosDialetos)) * 100, 2) as Percentual
-- 		from Usuario as u inner join Sessao as s 
-- 		on u.idUsuario = s.fkUsuario;