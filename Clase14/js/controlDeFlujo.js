// CONTROL DE FLUJO
// Estructuras condicionales (if - if...else - if...else if...else - switch...case)
console.log('Comienzo');
let edad = 170;
console.log('Edad ingresada:', edad);

// Mayoría de edad
// edad >= 18    -    edad > 17
if (edad >= 18) { // cuando la condición devuelva true
    console.log('Sos mayor de edad.');
} else { // cuando la condición devuelva false
    console.log('Sos menor de edad.');
}

// if (edad < 18) { // redundante e ineficiente
//     console.log('Sos menor de edad.');
// }

// Situación para votar (en Argentina)
if (edad < 16) {
    console.log('Aún no podés votar.');
} else if (edad == 16 || edad == 17 || edad > 70) {
    console.log('Podés votar, pero no es obligatorio.');
} else {
    console.log('Es obligatorio tu voto.')
}

// Tarea: validar el dato (nro entero y en un rango coherente)


console.log('Fin del algoritmo');


// Estructuras repetitivas indeterminadas (while - do...while)
// Estructuras repetitivas determinadas (for (desde,hasta,paso) - for...of - for...in)