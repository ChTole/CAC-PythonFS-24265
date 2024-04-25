// Estructuras condicionales 
// Vimos: if - if...else - if...else if...else 
// Resta: switch...case

console.log('Comienzo');

// Situación para votar (en Argentina)
let edad = 43;
let validarEdad = Number(edad);

// Validar el dato
// if (0 < edad < 120) // alternativa
if (validarEdad > 0 && validarEdad < 120 && validarEdad != NaN) {
    if (validarEdad < 16) {
        console.log('Aún no podés votar.');
    } else if (validarEdad == 16 || validarEdad == 17 || validarEdad > 70) {
        console.log('Podés votar, pero no es obligatorio.');
    } else {
        console.log('Es obligatorio tu voto.')
    }
} else {
    console.warn('Dato inválido!');
}

// Tarea: validar el dato (nro entero y en un rango coherente)

console.log('Fin del algoritmo');