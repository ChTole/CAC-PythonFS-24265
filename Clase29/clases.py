# Clases
# class Persona:
#     habita_en = 'Planeta Tierra'

# chris = Persona()
# print(chris)

# norma = Persona()
# print(norma)

import config_db

class Tabla:
    # CRUD
    pass

class Docente: # class Docente(Tabla):
    # Atributos de clase - comunes a todas las instancias
    tabla = 'docente'
    campos = ('id', 'nombre', 'apellido', 'cuit')
    conexion_db = config_db.conexion
    
    # Método constructor (o inicializador)
    def __init__(self, nom, ape, cuit):
        # Atributos de instacia
        self.nombre = nom
        self.apellido = ape
        self.cuit = cuit
        
    # Métodos --> CRUD
    def guardar_db(self):
        self.conexion_db.connect()
        cursor = self.conexion_db.cursor()
        campos_q = str(self.campos[1:]).replace("'", "`")
        
        consulta = f"INSERT INTO {self.tabla} {campos_q} VALUES (%s, %s, %s);"
        datos = (self.nombre, self.apellido, self.cuit)
        
        cursor.execute(consulta, datos)
        self.conexion_db.commit()
        self.conexion_db.close()
        
        print("Me guardo en la BBDD.")
    
    
    
docente = Docente("Juan", "Perez", "80123456780") # instancia
# print(dir(docente))
# print('*' * 30)
# print(docente.apellido)
docente.guardar_db()
# print(Docente.__mro__) # Method Order Resolution
# print(type(docente))
# print(docente.campos)

# otro_docente = Docente() # instancia
# print(otro_docente.campos)