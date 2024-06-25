# Clases que corresponden a entidades en la BBDD
from base_db.dml import Tabla
from base_db.config_db import conexion as con

class Nivel(Tabla):
    tabla = 'nivel'
    campos = ('id', 'nivel')
    conexion = con
    
    def __init__(self, valores):
        super().crear(valores)
        
class Docente(Tabla):
    tabla = 'docente'
    campos = ('id', 'nombre', 'apellido', 'cuit')
    conexion = con
    
    def __init__(self, valores):
        super().crear(valores)
    