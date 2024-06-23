class Tabla:
    
    # Constructor
    def __init__(self):
        pass
    
    # *** CRUD ***
    # Creador/"Constructor" de instancias de subclase
    def crear(self):
        pass
    
    def guardar_db(self):
        pass
    
    # Lectura
    @classmethod 
    def obtener(cls):
        pass
    
    # Modificación
    @classmethod 
    def actualizar(cls):
        pass
    
    # Eliminación
    @classmethod 
    def eliminar(cls):
        pass
    
    # *** Método común en CRUD (encapsulado) ***
    @classmethod
    def __conectar(cls):
        pass