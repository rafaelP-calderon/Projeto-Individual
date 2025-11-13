create table Usuario (
	idUsuario int primary key auto_increment,
    nome varchar(90),
    email varchar(255),
    senha varchar(90),
    dtCadastro datetime
);

create table Formulario (
	idFormulario int primary key auto_increment,
    idade int,
    dialeto enum('UK', 'US', 'AUS'),
    familiaridade varchar(45),
    frequencia int,
    fkUsuario int,
    constraint fkUsuarioFormulario foreign key (fkUsuario) references Usuario(idUsuario)
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

select u.nome as Nome, f.dialeto as Dialeto, s.acertosDialetos as Acertos, s.errosDialetos as Erros
	from Usuario as u join Formulario as f
	on u.idUsuario = f.fkUsuario
    join Sessao as s on u.idUsuario = f.fkUsuario;

select u.nome as Nome from Usuario as u join Sessao as s on u.idUsuario = s.fkUsuario where idSessao >= 3;

select u.nome as Nome, i.expressao as Expressão, s.pontuacao as Pontuação 
	from Usuario u join Sessao s on u.idUsuario = s.fkUsuario
    join sessaoIdioms si on s.idSessao = si.fkSessao
    join Idioms i on si.fkIdioms = i.idIdioms;
    
select u.nome as Nome, avg(round(s.pontuacao)) as Pontuação 
	from Usuario u join Sessao s on u.idUsuario = s.fkUsuario
    group by nome;
    
select u.nome as Nome, f.dialeto as Dialeto, s.pontuacao as Pontuação, 
	case when f.dialeto = 'UK' and s.pontuacao = 100 then 'O inglês britânico é o mais fácil!'
    when f.dialeto = 'US' and s.pontuacao = 100 then 'O inglês estadunidense é o mais fácil!'
    when f.dialeto = 'AUS' and s.pontuacao = 100 then 'O inglês australiano é o mais fácil!' 
    end as 'Inglês Mais Fácil'
	from Usuario u join Formulario f on u.idUsuario = f.fkUsuario join Sessao s on u.idUsuario = s.fkUsuario;
	
    
