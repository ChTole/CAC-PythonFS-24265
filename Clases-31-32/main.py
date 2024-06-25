from flask import Flask

app = Flask(__name__)
app.json.ensure_ascii = False

# Importar las vistas
from componentes.vistas_api import *
from componentes.vistas_web import *

# Lo siguiente sólo en desarrollo, no en producción
if __name__ == '__main__':
    app.run()