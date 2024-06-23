from flask import Flask

app = Flask(__name__)

# Importar las vistas

# Lo siguiente sólo en desarrollo, no en producción
if __name__ == '__main__':
    app.run()