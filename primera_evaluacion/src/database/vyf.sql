DROP DATABASE IF EXISTS fyv;
CREATE DATABASE IF NOT EXISTS fyv DEFAULT CHARACTER SET 'utf8';
USE fyv;

CREATE TABLE producto(
	id_producto integer not null auto_increment,
	nombre varchar(30) not null,
	precio integer not null,
	primary key (id_producto)
);
CREATE TABLE usuario(
	id_usuario integer not null auto_increment,
	nombre varchar(50) not null,
	pw varchar(30) not null,
	primary key (id_usuario)
);
CREATE TABLE admin(
	id_admin integer not null auto_increment,
	nombre varchar(50) not null,
	pw varchar(30) not null,
	primary key (id_admin)
);
CREATE TABLE pedido_usuario(
	id_pedido integer not null auto_increment,
	id_usuario integer not null,
	id_producto integer not null,
	cantidad integer not null,
	primary key (id_pedido),
	foreign key (id_usuario) references usuario(id_usuario)
);
CREATE TABLE pedido_producto(
	id_pedido integer not null,
	id_producto integer not null,
	cantidad integer not null,
	foreign key (id_pedido) references pedido_usuario(id_pedido),
	foreign key (id_producto) references producto(id_producto)
);
CREATE TABLE activo(
	id integer not null auto_increment,
    id_activo integer,
    nombre varchar(50),
    pw varchar(30),
    primary key(id)
);
insert into activo(id_activo, nombre, pw) values(0,'nulo','nulo');

INSERT INTO usuario(nombre, pw) VALUES('Usuario','usuario');
INSERT INTO admin(nombre, pw) VALUES('Admin','admin');

INSERT INTO producto(nombre, precio) VALUES('limon','20');
INSERT INTO producto(nombre, precio) VALUES('fresa','42');
INSERT INTO producto(nombre, precio) VALUES('naranja','13');
INSERT INTO producto(nombre, precio) VALUES('mandarina','20');
INSERT INTO producto(nombre, precio) VALUES('manzana_verde','50');
INSERT INTO producto(nombre, precio) VALUES('manzana_roja','40');

INSERT INTO producto(nombre, precio) VALUES('pimiento','45');
INSERT INTO producto(nombre, precio) VALUES('zanahoria','15');
INSERT INTO producto(nombre, precio) VALUES('apio','13');
INSERT INTO producto(nombre, precio) VALUES('jitomate','27');
INSERT INTO producto(nombre, precio) VALUES('lechuga','8');

DELIMITER //
CREATE PROCEDURE set_activo(in id_activo_new integer,in nombre_new char(50), in pass_new char(30))
BEGIN
	update activo a set a.id_activo = id_activo_new, a.nombre = nombre_new, a.pass = pass_new
	where a.id = 1;
END;
//
