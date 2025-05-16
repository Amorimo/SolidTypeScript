create database dblivraria;
use dblivraria

create table produto(
id int auto_increment primary key,
nome varchar(100) not null,
descricao text not null,
preco decimal (6,2) not null
);

create table endereco(
id int auto_increment primary key,
tipo_logradouro enum("Rua","Alameda","Viela","Avenida","Travessa","Praça","Beco"),
logradouro varchar(100) not null,
numero varchar(10) not null,
complemento varchar(100),
cep varchar(10),
bairro varchar(50)
);

create table cliente(
id int auto_increment primary key,
nome varchar(100) not null,
cpf varchar(15) not null unique,
email varchar(100) not null unique,
telefone varchar(20),
id_endereco int not null,
aniversario date not null
);


create table autor(
id int auto_increment primary key,
nome varchar(100) not null,
cpf varchar(15) not null unique,
email varchar(100) not null unique,
telefone varchar(20),
id_endereco int not null,
genero_literario varchar(30)
);


create table funcionario(
id int auto_increment primary key,
nome varchar(100) not null,
cpf varchar(15) not null unique,
email varchar(100) not null unique,
telefone varchar(20),
id_endereco int not null,
cargo varchar(50) not null,
salario decimal(7,2) 
);

create table venda(
id int auto_increment primary key,
id_cliente int not null,
id_funcionario int not null,
data_hora datetime default current_timestamp()
);

create table itensvenda(
id int auto_increment primary key,
id_venda  int not null,
id_produto int not null,
quantidade int not null
);

create table pagamento(
id int auto_increment primary key,
id_venda int not null,
total_pagar decimal(7,2)
);

alter table cliente
add constraint`fk_cliente_pk_endereco`
foreign key cliente(`id_endereco`)
references endereco(`id`);

alter table autor
add constraint `fk_autor_pk_endereco`
foreign key(`id_endereco`)
references endereco(`id`);

alter table funcionario
add constraint `fk_funcionario_pk_endereco`
foreign key(`id_endereco`)
references endereco(`id`);

alter table venda
add constraint `fk_venda_pk_cliente`
foreign key(`id_cliente`)
references cliente(`id`);


alter table venda
add constraint `fk_venda_pk_funcionario`
foreign key venda (`id_funcionario`)
references funcionario(`id`);


alter table itensvenda
add constraint `fk_itensvenda_pk_venda`
foreign key itensvenda (`id_venda`)
references venda(`id`);



alter table itensvenda
add constraint `fk_itensvenda_pk_produto`
foreign key itensvenda (`id_produto`)
references produto(`id`);


alter table pagamento
add constraint `fk_paagamento_pk_venda`
foreign key pagamento (`id_venda`)
references venda(`id`);
