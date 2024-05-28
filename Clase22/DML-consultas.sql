-- Lectura de los datos
-- Estructura básica de la consulta
-- SELECT campos
-- FROM tabla
-- WHERE condición

-- Datos de la tabla principal (cursos)
-- Condición con expresión relacional
SELECT * 
FROM cursos
WHERE cupo > 8; -- expresión relacional

SELECT * 
FROM cursos
WHERE docente_id = 1; 

-- Condición con expresión lógica
SELECT * 
FROM cursos
WHERE docente_id = 1
	AND cupo > 5;
    
-- Pertenencia
SELECT * 
FROM cursos
WHERE tema_id IN (2, 3); -- dónde nivel pertenezca a algún elemento de la tupla

-- Ordenar y agrupar
SELECT * 
FROM cursos
WHERE tema_id IN (2, 3)
ORDER BY tema_id; -- ordenado por tema_id, por defecto ASCendente

-- COUNT recuenta registros
SELECT tema_id, COUNT(*) AS Cantidad
FROM cursos
WHERE cupo = 5
GROUP BY tema_id;

-- DISTINCT
SELECT DISTINCT(tema_id), cupo
FROM cursos
ORDER BY cupo;

-- Datos en tema
SELECT nombre
FROM tema
WHERE nombre LIKE 'Python%'; -- que comience con Python


SELECT * FROM cursos;