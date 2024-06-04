# Colecciones en Python
# - Listas (arrays)
# - Tuplas (casi arrays)
# - Diccionarios (JSON - parecidos "object")
# - Sets y frozensets (conjuntos)

# Listas - propiedades
mi_lista = ["cadena", 12, -5.5, True]
print(mi_lista)
# índices      0       1    2     3

# Son heterogéneas -> cualquier objeto

print(mi_lista[2])
# Son ordenadas -> tienen índices

# print(mi_lista[10]) #IndexError: list index out of range

mi_lista[3] = False
print(mi_lista)

mi_lista.append(["a", "b", "c"])
print(mi_lista)

# Son mutables -> puedo modificar, agregar y eliminar elementos

del mi_lista[1]
print(mi_lista)

print(mi_lista[3])
print(mi_lista[3][1])

mi_lista[3][2] = "Hasta el jueves!"
print(mi_lista)

print(mi_lista[3][2][9:])

# Tuplas
# Son ordenadas, heterogéneas e INMUTABLES.
# Dos formas de crear un tupla
mi_tupla = (1, True, ["a", "b"])
otra_tupla = False, 3.14, "cadena"

# Tarea 2: ¿qué pasa con la lista dentro de la tupla?