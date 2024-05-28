-- Comentario
/*
Comentario
de más de 
una línea
*/

-- SQL - Structured Query Language - Lenguaje estructura de consultas
-- Sublenguajes

-- DDL - Data Description Language
-- Metadatos: "datos de los datos", atributos de los datos a almacenar.
-- Convención: Todas las sentencias se escriben en MAYÚSCULAS.
CREATE DATABASE cac_python_fs;
USE cac_python_fs;

-- Cursos
/*
nombre: string --> VARCHAR
fecha_inicio: DATE --> '2024-07-01' --> cadena
fecha_fin: DATE --> '2024-09-30' --> cadena
docente: string --> VARCHAR
capacidad_cupo: Number --> INT
*/

CREATE TABLE cursos (
	nombre VARCHAR(30),
    fecha_inicio DATE,
    fecha_fin DATE,
    docente VARCHAR(60),
    capacidad_cupo INT);
    
-- DML - Data Mapulation Language
/*
C reate --> INSERT INTO
R ead   --> SELECT
U pdate --> UPDATE
D elete --> DELETE
*/

INSERT INTO cursos (nombre, fecha_inicio, fecha_fin) VALUES
	('Python', '2024-07-01', '2024-09-30'), -- tuplas
	('JavaScript', '2024-07-01', '2024-09-30');
    
INSERT INTO cursos VALUES
	('Python', '2024-07-01', '2024-09-30', "Cosme Fulanito", 10),
    ('Python', '2024-10-01', '2024-12-30', "Cosme H. Fulanito", 10),
	('Python 3.0', '2024-10-01', '2024-12-30', "Sr. Fulanito", 10);
    
-- Read - Lectura de los datos
SELECT * FROM cursos; -- "Mostrar todos los campos y registros de...

-- DCL - Data Control Language
-- Permisos y privilegios de usuari@s de la BBDD.