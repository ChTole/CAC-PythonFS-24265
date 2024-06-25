# Vistas para la arquitectura API REST
from flask import jsonify

from main import app
from componentes.modelos import Nivel

@app.route('/api-edtech/niveles')
def mostrar_niveles():
    niveles = Nivel.obtener()
    datos = [vars(nivel) for nivel in niveles]
    return jsonify(datos)