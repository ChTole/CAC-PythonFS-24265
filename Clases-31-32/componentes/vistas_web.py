# Vistas según patrón MVT (Model View Template)
from flask import render_template

from main import app
from componentes.modelos import Docente

@app.route('/')
def mostrar_docentes():
    docentes = Docente.obtener()
    return render_template('./base.html', docentes=docentes)
