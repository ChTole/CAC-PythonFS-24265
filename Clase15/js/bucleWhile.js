// CONTROL DE FLUJO

console.log('Comienzo');
// Estructuras repetitivas indeterminadas (while - do...while)
let limite = 5;
let contador = 0;

let listaVacia = document.querySelector('#lista');
console.log(listaVacia);
console.log(typeof listaVacia);

// Comparación con elemento con contenido
// let listaConDatos = document.querySelector('#listaConDatos');
// console.log(listaConDatos);

// Bucle while
while (contador < limite) {
    // Creo la etiqueta <li></li>
    let item = document.createElement('li');
    // Cadena dinámica y la agrego como contenido a la etiqueta
    // <li>Item dinámico N° «contador»</li>
    item.innerHTML = `Item dinámico N° ${contador}`;
    listaVacia.appendChild(item);
    contador++ // contador = contador + 1
}

// Bucle do...while

let nuevoLimite = 0;
let nuevoContador = 0;

let otraListaVacia = document.querySelector('#otraLista');

do { // lo ejecuta por lo menos una vez, porque la condición se evalúa al final del bloque!!!
    let item2 = document.createElement('li');
    item2.innerHTML = "Nuevo contenido";
    otraListaVacia.appendChild(item2);
    nuevoContador++
} while (nuevoContador < nuevoLimite);

console.log('Fin del algoritmo.')
