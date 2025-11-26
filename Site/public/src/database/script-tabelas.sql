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
    acertosUK int,
    acertosUSA int,
    pontuacao int,
    fkUsuario int,
    constraint fkUsuarioSessao foreign key(fkUsuario) references 
    Usuario(idUsuario)
);

select * from usuario;
select * from questionario;
select * from sessao;
    
create or replace view vwTaxaAcertoUK as 
select 
    u.nome, 
    s.fkUsuario as idUsuario, 
    case when s.acertosUK > 0 then s.pontuacao
        else null
    end as PontuacaoUK
from sessao as s 
join usuario as u on s.fkUsuario = u.idUsuario 
where s.acertosUK > 0;
    
create or replace view vwTaxaAcertoUS as 
select 
    u.nome, 
    s.fkUsuario as idUsuario, 
    case when s.acertosUSA > 0 then s.pontuacao
        else null
    end as PontuacaoUS
from sessao as s 
join usuario as u on s.fkUsuario = u.idUsuario
where s.acertosUSA > 0;

create or replace view vwErrosUK as
select s.fkUsuario as idUsuario, sum(erros) as totalErrosUK
	from Sessao s join Usuario u
    on s.fkUsuario = u.idUsuario
	where acertosUK > 0
group by fkUsuario;

create or replace view vwErrosUS as
select s.fkUsuario as idUsuario, sum(erros) as totalErrosUS
	from Sessao s join Usuario u
    on s.fkUsuario = u.idUsuario
	where acertosUSA > 0
group by fkUsuario;

                
select PontuacaoUK from vwTaxaAcertoUK
where idUsuario = (select idUsuario from Usuario where email = 'rafacalderon2307@gmail.com');

select PontuacaoUS from vwTaxaAcertoUS
where idUsuario = (select idUsuario from Usuario where email = 'rafacalderon2307@gmail.com');   

select totalErrosUk from vwErrosUK
where idUsuario = (select idUsuario from Usuario where email = 'rafacalderon2307@gmail.com');

select totalErrosUS from vwErrosUS
where idUsuario = (select idUsuario from Usuario where email = 'rafacalderon2307@gmail.com');