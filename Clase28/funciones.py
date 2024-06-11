# Funciones
# Parámetros, retorno, entrada por valor y por referencia

# Respetar los tiempos:
# 1° Definición
# 2° Invocación

# Sin parámetros ni retorno
# def crear_usuario():
#     # la variable nombre es de ámbito local
#     nombre = input("Ingrese su nombre: ")
#     print(f"Se creó usuari@ {nombre}.")

# Ámbitos
# print(nombre) # NameError: name 'nombre' is not defined

# Con parámetros y retorno
# def crear_usuario(nombre): # parámetro
#     return f"Se creó usuari@ {nombre}."
    
# nuevo_usuario = input("Ingrese su nombre: ")
# msj = crear_usuario(nuevo_usuario) # argumento
# print(msj)

# Argumentos por valor y por referencia
def calcular_cuadrado(numero): # argumento por valor
    return numero * numero

mi_nro = 5
print(calcular_cuadrado(mi_nro)) # 25
print(mi_nro) # 5 --> no se modifica el valor

def calcular_muchos_cuadrados(lista_nros): # [2, 3, 4]
    for i in range(len(lista_nros)): # range(3)
        lista_nros[i] = lista_nros[i] * lista_nros[i]
        
    return lista_nros

mi_lista = [2, 3, 4]
# print(calcular_muchos_cuadrados(mi_lista)) # las colecciones "viajan" por referencia
print(calcular_muchos_cuadrados(mi_lista.copy())) 
print(mi_lista)

# otra_lista = mi_lista # no copio, doy una referencia
otra_lista = mi_lista.copy() 
print(otra_lista)

otra_lista.append(5)
print(otra_lista)

print(mi_lista)
