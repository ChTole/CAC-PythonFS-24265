# Python NO ES RETROCOMPATIBLE

dato = 10

# CUIDADO!!! Python 3.10
match dato:
    case 1:
        print("dato vale 1")
    case 5:
        print("dato vale 5")
    case _:
        print("ninguno de los anteriores")

# if - elif - else        
if dato == 1:
    print("dato vale 1")
elif dato == 5:
    print("dato vale 5")
else:
    print("ninguno de los anteriores")