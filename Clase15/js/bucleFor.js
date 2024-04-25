// Estructuras repetitivas determinadas (for (desde,hasta,paso) - for...of - for...in)

let palabra = "bucle";
let listaVacia2 = document.querySelector('#lista3')

console.log(typeof palabra);
console.log(palabra.length); // autoboxing: transformo momentaneamente en objeto para obtener un atributo, luego vuelve a primitivo.

for (let valor = 1; valor < palabra.length; valor++) {
//  (   desde     ;        hasta          ; paso   )
    // console.log(valor);
    // La variable item es de ámbito local, porque está declarada dentro del bloque
    let item = document.createElement('li');
    item.innerHTML = `Item N° ${valor}`;
    listaVacia2.appendChild(item);
    console.log(item);
}

// console.log(item); // No la reconoce por el ámbito
console.log(valor);