-- Primero en la tablas que corresponden a claves foráneas
INSERT INTO nivel (nivel) VALUES
	('básico'),
    ('intermedio'),
    ('avanzado'),
    ('especialización');

SELECT * FROM nivel;

INSERT INTO tema (nombre, nivel_id, descripcion) VALUES
	('Python desde cero', 1, "Introducción a la programación y sintáxis básica del lenguaje."),
    ('Python - análisis de datos', 2, "Aplicación de ETL con numpy, pandas y gráficos con matplotlib."),
    ("Desarrollo web Con HTML, CSS y JS", 1, "Introducción al desarrollo web, maquetación e interacción con sitio y/o aplicación web."),
    ("Administración de bases de datos", 1, "Persistencia de datos, tipos de bases de datos, manejo básico de bases de datos relacionales."),
    ("Django Framework", 4, "Desarrollo backend con Python, microservicios, arquitectura API-REST."),
    ("Introducción a Machine Learning", 3, "Fundamentos de ML, tipos y desarrollo de algoritmos con Python.");

SELECT * FROM tema;

INSERT INTO docente	(nombre, apellido, cuit) VALUES
	('Cosme', 'Fulanito', '20123456780'),
    ('Emmet','Brown','30123456780'),
    ('Obi-Wan','Kenobi','50123456780');
    
SELECT * FROM docente;

INSERT INTO cursos (tema_id, fecha_inicio, fecha_cierre, docente_id, cupo) VALUES
	(1, '2024-07-01', '2024-09-30', 1, 10),
    (3, '2024-10-01', '2024-12-30', 2, 5),
    (4, '2024-07-01', '2024-09-30', 3, 5),
    (2, '2024-10-01', '2024-12-30', 1, 5);

INSERT INTO cursos (tema_id, fecha_inicio, fecha_cierre, docente_id, cupo) VALUES
	(1, '2024-07-01', '2024-09-30', 2, 10),
    (2, '2024-10-01', '2024-12-30', 3, 5);

SELECT * FROM cursos;
