// Repaso Funciones
// Fundamento: Encapsular código para reutilizar o modularizar.

// Funciones en JS se pueden crear como expresiones:
const saludar = function(nombre, comision) {
    return `Hola, soy ${nombre}! Estoy en la comisión ${comision}.`
}

// Invocación
let frase = saludar('Christian', 24265) + ' - CAC Python FS';

console.log(frase);

// Otro ejemplo de función anónima // IIFE (Expresión de función inmediatamente invocada)
(function() {
    let frase = 'Soy una función anónima, me ejecuto luego de definir.'
    console.log(frase);
})();

// Callback
// Función que recibe como parámetro otra función.

let recorrer = function(elemento, indice) {
    console.log(`índice: ${indice} - elemento: ${elemento}`);
}

let lenguajes = ['Python', 'JavaScript', 'SQL'];

// Método de los array´s
lenguajes.forEach(recorrer); // callback!

// Función flecha
lenguajes.forEach((elemento, indice) => { // función flecha
    console.log(`índice: ${indice} - elemento: ${elemento}`);
});

let cuadrado = (numero) => numero * numero; // función flecha: retorno implícito

let resultado = cuadrado(2); // 4

console.log(resultado); // 4 

// For o for each...
for (let l of lenguajes) {
    console.log(l.toUpperCase());
}

lenguajes.forEach(l => console.log(l.toUpperCase()));