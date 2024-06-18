from flask import Flask
from flask import jsonify

from componentes.consultar_db import traer_todos

app = Flask(__name__)

@app.route('/')
def inicio():
    return "<h1>Bienvenid@s a Flask</h1>"

@app.route('/api/todos')
def mostrar():
    contenido = traer_todos()
    return jsonify(contenido)

if __name__ == '__main__':
    app.run()