# Estructura repetitiva determinada

# for variable_de_control in objeto_iterable:

for valor in range(5): # 0, 1, 2, 3, 4
    print(f"la variable de control vale: {valor}")
    
palabra = "Comisión"
#          01234..7
print(len(palabra))
print(palabra[3])
print(palabra[3:6]) # slicing / rebanadas
print(palabra[3:6:2]) # desde:hasta(exc):paso 
#  C o m i s i ó n
#  0 1 2 3 4 5 6 7
#  [4] -> s
#  [2:6] -> misi
#  [2:6:2] -> ms

for letra in palabra:
    print("Dentro del bucle")

# Tarea: implementar las sentencias else, continue y break.