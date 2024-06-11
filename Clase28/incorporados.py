# - Módulos built-in
# https://docs.python.org/es/3/py-modindex.html
from datetime import date

hoy = date.today()
print(hoy)

dia_importante = date(1981, 1, 15)
print(dia_importante)

edad = hoy - dia_importante # timedelta
print(edad)
print(type(edad))
print(f"Christian tiene {edad.days // 365} años.")

