# Diccionarios
# Pares { clave: valor }

dicc_vacio = {}

materias = {
    "matemáticas": [7.5, 8, 8.5],
    "literatura": [8.5, 6, 9]
}

# print(f"{materias} --- {type(materias)}")
# print(materias["matemáticas"])
# print(materias[0]) # KeyError: 0

materias["geografía"] = [9.5, 7, 6] # si no existe, se crea
# print(materias)

materias["geografía"] = False # se existe, se sobreescribe
# print(materias)

del materias["geografía"]
# print(materias)

materias["matemáticas"].append(8.5)
# print(materias)

# Propiedades
# - Orden: no son ordenados, tengo claves
# - Mutabilidad: son mutables, puedo agregar pares {c:v}, modificar valores y eliminar pares.
# - Heterogeneidad
#       * Claves: sólo pueden ser objetos inmutables (tuplas, str, int, float)
#       * Valores: pueden ser cualquier objeto

materias["extracurriculares"] = {
    "programación": True,
    "robótica": "10hs mensuales",
    5: ("a", "b")
}

# print(materias)

# A partir de Python 3.6 --> se pueden "ordenar"

# print(materias.keys()) # claves
# print(materias.values()) # valores
# print(materias.items()) # tuplas (clave, valor)

# print(type(materias.keys())) # claves

materias["física"] = [8.5, 6, 9]

for clave in materias.keys():
    print(f"{clave} -- {materias[clave]}")
    
for clave, valor in materias.items(): # (clave, valor)
    print(f"{clave} -- {valor}")
    