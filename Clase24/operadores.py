# Expresiones y variables

# Nombres de variables
# - Minúsculas (convención)
# - snake_case (convención)
# - pueden contener números, pero no al principio (sintaxis)
# - pueden comenzar con _

# No existen las constantes, pero para crearlas utilizo sólo mayúsculas:
MI_CONSTANTE = 5
PASS_SERVER = "123ABC"

# Propiedades del lenguaje:
# - Tipado dinámico
# - Fuertemente tipado

# Aritméticas
resultado = 2 ** 3 / 2 + 5 # = 9.0 float  //  la división siempre devuelve float
division_entera = 9 // 2 # division entera

# print(5 / 0) # ZeroDivisionError

print(resultado, type(resultado))
print(division_entera, type(division_entera))

# print("123" + 1) # TypeError --> Fuertemente tipado
print("hola" + " comisión 24265!") # concatenar
print("hola " * 5) # contatenar "múltiples veces"

# Relacionales (comparación) - identidad is - pertenencia in
mayor_que = 5 > 2.5
otra_comparacion = "a" < "A"
comparar_bool = True < False # 1 < 0
un_numero = 5 + True # 5 + 1
igualdad = 5 * 4 != 2 * 10

print(mayor_que, type(mayor_que))
print(otra_comparacion, type(otra_comparacion))
print(comparar_bool, type(comparar_bool))
print(un_numero, type(un_numero))
print(igualdad, type(igualdad))

# Lógicas
print(not True)
print(True and False or True)