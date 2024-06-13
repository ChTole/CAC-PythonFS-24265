import mysql.connector

# Establecer la conexión
config_dev = {
    'user': 'root', 
    'password':'',
    'host':'127.0.0.1',
    'database':'edtech2024'
}

config_prod = {} # despliegue

conexion = mysql.connector.connect(**config_dev)