-- Documentación para tipo de datos
-- https://dev.mysql.com/doc/refman/8.3/en/data-types.html

-- Creación de la BBDD
CREATE DATABASE python_24265;

-- Apunto a la BBDD
USE python_24265;

-- Creación de las tablas
CREATE TABLE cursos (
	id INT NOT NULL AUTO_INCREMENT,
    tema_id INT NOT NULL,
    fecha_inicio DATE,
    fecha_cierre DATE,
    docente_id INT NOT NULL,
    cupo INT UNSIGNED DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE tema (
	id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    nivel_id INT,
    descripcion VARCHAR(200),
    PRIMARY KEY (id)
);

CREATE TABLE docente (
	id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(30),
    apellido VARCHAR(30),
    cuit VARCHAR(11), -- la lógica de negocio luego con Python
    PRIMARY KEY (id)
);

CREATE TABLE nivel (
	id INT NOT NULL AUTO_INCREMENT,
    nivel VARCHAR(20),
    PRIMARY KEY (id)
);

-- Documentación para claves foráneas
-- https://dev.mysql.com/doc/refman/8.3/en/example-foreign-keys.html
-- https://dev.mysql.com/doc/refman/8.3/en/create-table-foreign-keys.html

-- Luego de creadas, establezcos las claves foráneas
ALTER TABLE cursos
	ADD FOREIGN KEY (tema_id) REFERENCES tema(id) 
		ON UPDATE NO ACTION 
        ON DELETE NO ACTION,
	ADD FOREIGN KEY (docente_id) REFERENCES docente(id) 
		ON UPDATE NO ACTION 
        ON DELETE NO ACTION;
 
ALTER TABLE tema
	ADD FOREIGN KEY (nivel_id) REFERENCES nivel(id) 
		ON UPDATE NO ACTION 
        ON DELETE NO ACTION;