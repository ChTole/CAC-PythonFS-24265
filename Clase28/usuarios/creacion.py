def validar_nombre(dato): # cadena
    
    if dato.isalpha():
        return True
    
    return False

def crear():
    nombre = input('Ingrese nombre: ')
    
    if validar_nombre(nombre):
        print(f"Se creó usuari@ {nombre}")
    else:
        print('Dato inválido!!!')