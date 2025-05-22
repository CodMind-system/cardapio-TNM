create table cardapio(
    id serial primary key,
    nome varchar(255),
    valor int,
    descricao varchar(255),
    imagem varchar(255),
    categoria varchar(255)
);

create table catergorias(
    id serial primary key,
    nome varchar(255),
    imagem varchar(255)
);

create table pedido(
    id serial primary key,
    valorTotal int,
    mesa int,
    
)