class Tabla:
    
    # Creación de la tabla
    def __init__(self, nombre, conexion, campos):
        self.tabla = nombre
        self.conexion = conexion
        self.campos = campos
    
    # CRUD
    def crear(self, valores, de_bbdd=False):
        if de_bbdd:
            # del modelo --> args = (valores) # (())
            for campo, valor in zip(self.campos, *valores):
                setattr(self, campo, valor)
        else:
            for campo, valor in zip(self.campos[1:], valores):
                setattr(self, campo, valor)
    
    def guardar_db(self):
        """
        Ejemplo Docente:
        INSERT INTO docente ('nombre', 'apellido', 'cuit')
        VALUES (%s, %s, %s);
        """
        # campos_q = "(`campo_2`, ... , `campo_n`)"
        campos_q = str(self.campos[1:]).replace("'", "`")
        # values_q = "(%s, ... , %s )" # como cant de campos
        values_q = f"({'%s, ' * (len(self.campos)-2)} %s)"
        
        consulta = (f"INSERT INTO {self.tabla} {campos_q} "
                    f"VALUES {values_q};")
        
        datos = tuple(vars(self).values())
        # datos = ('Cosme', 'Fulanito', '90123456780')
        rta_db = self.__conectar(consulta, datos)
        
        if rta_db:
            return 'Creación exitosa.'
        
        return 'No se pudo crear el registro.'
            
    
    @classmethod
    def obtener(cls, campo=None, valor=None):
        
        if campo == None or valor == None:
            consulta = ("SELECT * " 
                       f"FROM {cls.tabla};")
            resultado = cls.__conectar(consulta)
        else:
            consulta = ("SELECT * " 
                       f"FROM {cls.tabla} "
                       f"WHERE {campo} = %s;")
            resultado = cls.__conectar(consulta, (valor,))
        
        return resultado
     
    @classmethod
    def eliminar(cls, id):
        consulta = (f"DELETE FROM {cls.tabla} WHERE id = %s ;")
        rta_db = cls.__conectar(consulta, (id,))
        
        if rta_db:
            return 'Eliminación exitosa.'
            
        return 'No se pudo eliminar el registro.'
        
    
    @classmethod
    def modificar(cls, registro):
        # type(registro) = dict
        # {'id': '...', 'nombre': '...', 'apellido': '...', 'cuit': '...'}
        """
        Ejemplo Docente
        UPDATE docente
        SET 
            campo_1 = %s,
            ...
            campo_n = %s
        WHERE id = %s;
        """
        update_q = f"UPDATE {cls.tabla} "
        set_q = 'SET'
        
        id = registro.pop('id') # '1'
        id = int(id) if type(id) != int else id # 1
        
        for c in list(registro.keys()):
            set_q += f' {c} = %s,'
            """
            SET nombre = %s, apellido = %s, cuit = %s,
            """
        
        set_q = set_q[0:-1]       
        # SET nombre = %s, apellido = %s, cuit = %s
        where_q = f" WHERE id = %s;"
        consulta = update_q + set_q + where_q    
        """
        UPDATE docente
        SET nombre = %s, apellido = %s, cuit = %s
        WHERE id = %s;
        """
        
        nvos_datos = *list(registro.values()), id
        #            *['..', '..', '..'], id        
        #            '..', '..', '..', id # TUPLA!
        rta_db = cls.__conectar(consulta, nvos_datos)
        
        if rta_db:   
            return 'Modificación exitosa.'
        
        return 'No se pudo modificar el registro.'

    @classmethod        
    def __conectar(cls, consulta, datos=None):
        
        try:
            cursor = cls.conexion.cursor()
        except Exception as e:
            cls.conexion.connect()
            cursor = cls.conexion.cursor()
        
        if consulta.startswith('SELECT'):
            
            if datos != None:
                cursor.execute(consulta, datos)
            else:
                cursor.execute(consulta)
            
            rta_db = cursor.fetchall()
            
            if rta_db != []:
                resultado = [cls(registro, de_bbdd=True) \
                                for registro in rta_db]
                
                if len(resultado) == 1:
                    resultado = resultado[0]
                    
            else:
                resultado = False          
            
            cls.conexion.close()
        
        else:
            
            try:
                cursor.execute(consulta, datos)
                cls.conexion.commit()    
                cls.conexion.close()
                resultado = True
            except Exception as e:
                resultado = False
            
        return resultado