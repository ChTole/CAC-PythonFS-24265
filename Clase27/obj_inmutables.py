palabra = "Comisión"
print(palabra)

print(palabra[0])

# palabra[0] = "x" # TypeError: 'str' object does not support item assignment

palabra = "x" + palabra[1:] # NO ES MUTAR! es una reasignación
print(palabra)

mi_nro = 5
print(mi_nro)

mi_nro += 1 # mi_nro = mi_nro + 1
print(mi_nro)
