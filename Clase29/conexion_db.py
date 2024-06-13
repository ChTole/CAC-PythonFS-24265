import mysql.connector

# Establecer la conexión
conexion = mysql.connector.connect(user='root', 
                                    password='',
                                    host='127.0.0.1',
                                    database='edtech2024')

# Utilizar los datos
# R de CRUD --> Leer los datos
# cursor = conexion.cursor() # lista con tuplas = registros
# cursor = conexion.cursor(dictionary=True) # 
# consulta = "SELECT * FROM docente;"

# cursor.execute(consulta)
# datos = cursor.fetchall()
# print(datos)

# C de CRUD --> Inserto en la BBDD
cursor = conexion.cursor()
tabla = "docente"
campos = ("id", 'nombre', "apellido", "cuit")
campos_q = str(campos[1:]).replace("'", "`") # reemplazo ' por `
#        ("nombre", "apellido", "cuit")
#        (`nombre`, `apellido`, `cuit`)
datos = ("Juan", "Perez", "80123456780")

consulta = f"INSERT INTO {tabla} {campos_q} VALUES (%s, %s, %s);"
#                                                    PREVENCIÓN

cursor.execute(consulta, datos)
conexion.commit()


# SIEMPRE CIERRO LA CONEXIÓN!!!
conexion.close()