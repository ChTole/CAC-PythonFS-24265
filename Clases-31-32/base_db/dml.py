class Tabla:
    
    # Constructor
    def __init__(self, n_tabla, n_campos, n_conexion):
        self.tabla = n_tabla
        self.campos = n_campos
        self.conexion = n_conexion
            
    # *** CRUD ***
    # Creador/"Constructor" de instancias de subclase
    def crear(self, valores):
        for campo, valor in zip(self.campos, valores):
            setattr(self, campo, valor)
    
    def guardar_db(self):
        pass
    
    # Lectura
    @classmethod 
    def obtener(cls, campo=None, valor=None):
        
        if campo == None or valor == None:
            consulta = f"SELECT * FROM {cls.tabla};"
            return cls.__conectar(consulta)
        else:
            consulta = (f"SELECT * FROM {cls.tabla} "
                        f"WHERE {campo} = %s;")
            return cls.__conectar(consulta, (valor,))
                    
    
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
    def __conectar(cls, consulta, datos=None):
        
        try:
            cursor = cls.conexion.cursor()
        except Exception as e:
            cls.conexion.connect()
            cursor = cls.conexion.cursor()
        
        if datos == None:    
            cursor.execute(consulta)
        else:
            cursor.execute(consulta, datos)
        
        if consulta.startswith('SELECT'):
            datos = cursor.fetchall()
            # lista por comprehensión
            resultado = [cls(registro) for registro in datos]
            
            if len(resultado) == 1:
                resultado = resultado[0]
            
            cls.conexion.close()
            return resultado
        else:
            cls.conexion.commit()
            cls.conexion.close()
            
        
        
            
        