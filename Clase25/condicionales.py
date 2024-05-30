# Estructuras de control de flujo

# if
# edad = 4

# if edad >= 18:
#     print("Sos mayor de edad.")
    
# if else
edad = input("Ingrese su edad: ")    # "43"

# ASI NO - PEP8
# if edad.isdigit() == True: # ASI NO
# if edad.isdigit() is True: # ASI MENOS
if edad.isdigit() and int(edad) in range(1, 121):
    
    if int(edad) >= 18:
        print("Sos mayor de edad.")
    else:
        print("Sos menor de edad")
else:
    print("Dato inválido.")

print("Continúa mi algoritmo...")