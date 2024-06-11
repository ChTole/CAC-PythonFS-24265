# ENTORNOS VIRTUALES!!!
# - Módulos de terceros
# https://pypi.org/

import requests

peticion = requests.get("https://jsonplaceholder.typicode.com/users")

print(peticion.status_code)

print(peticion.json())