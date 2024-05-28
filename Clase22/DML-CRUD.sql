-- Create
INSERT INTO docente (nombre, apellido, cuit) VALUES
	('Charles', 'Xavier', '70123456780');
    
-- Read
-- CONCAT concatena los parámetros pasados como argumentos.
-- AS alias de la columna en la salida.
SELECT CONCAT(apellido, ', ', nombre) AS 'Apellido y nombre'
FROM docente;

-- Update
UPDATE cursos
SET 
	fecha_inicio = '2025-02-01',
    fecha_cierre = '2025-04-30'
WHERE id = 4; -- LA CONDICIÓN SIEMPRE!!! SINO SE MODIFICAN TODOS LOS REGISTROS!!!

-- Delete
DELETE FROM cursos
WHERE tema_id = 4; -- LA CONDICIÓN SIEMPRE!!! SINO SE ELIMINAN TODOS LOS REGISTROS!!!


SELECT * FROM cursos;