import mysql.connector

config_dev = {
    # configuración en desarrollo (local)
    "user": 'root',
    'password': '',
    'host': '127.0.0.1',
    'database': 'edtech2024'
}

config_prod = {
    # configuración en producción (despliegue)
    "user": '',
    'password': '',
    'host': '',
    'database': ''
}

conexion = mysql.connector.connect(**config_dev)