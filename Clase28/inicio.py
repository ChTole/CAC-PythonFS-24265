# 1ra opción: importo todo el módulo
# import usuarios
# 2da opción: sólo importo lo que ejecuto
# from usuarios import crear
# Paquete usuarios
from usuarios.creacion import crear
from usuarios.sesion import iniciar_sesion
# from paquete.módulo import función ó clase ó variable

opcion = '' # forzar do...while
menu = """
** Menú **
1 - Crear usuari@
2 - Iniciar sesión
3 - Salir
"""

while opcion != '3':
    print(menu)
    opcion = input("Ingrese su opción: ")
    
    if opcion == '1':
        # print("Creación en construcción")
        # 1ra opción
        # usuarios.crear()
        # 2da opción
        crear()
    elif opcion == '2':
        # print("Inicio en construcción")
        iniciar_sesion()
    elif opcion == '3':
        print('Adiós!')
    else:
        print('Opción inválida')



# Funciones built-in
# https://docs.python.org/es/3/library/functions.html

# Introducción módulos
# - Módulos propios
# Fundamento y creación.



