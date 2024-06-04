# Estructura repetitiva indeterminada
# contador = 0

# while contador < 3:
#     print("Dentro del bucle!")
#     contador += 1 # contador = contador + 1
    
# Forzar do...while
# opcion = ""

# while opcion != "salir":
#     opcion = input("Ingrese opción: ")

# Sentencias continue, break y else
# El bucle se detiene luego de ingresar 3 nros pares positivos.
cumplido = False # hipótesis ó bandera
contador = 0
print('** Ingrese 3 números positivos pares // "salir" para terminar **')

while not cumplido:
    entrada = input("Ingrese un número par positivo: ")
    
    if entrada.isdigit() and int(entrada) % 2 == 0:
        contador += 1 
        print(f"contador vale: {contador}")
    elif entrada == "salir":
        break # salir del bucle // salir de la estructura
    
    if contador < 3:
        continue # vuelvo al principio del bucle
    
    cumplido = True    

else: # opcional
    print("La condición devolvió False")

print(f"La variable entrada vale: {entrada}") # la variable no está aislada

print("Fin del algoritmo.")