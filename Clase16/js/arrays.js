// *** Array ***
// Dato complejo, también llamado arreglo, matriz (unidimensional), vector, etc.
// let nombre = "Christian";

// Creación
let lenguajes = ['Python', 'JavaScript', 'PHP', 'Java'];
//                  0           1          2       3

console.log(lenguajes[2]);
console.log(lenguajes);
console.log(typeof lenguajes); // object
console.log(lenguajes instanceof Array); // true
console.log(lenguajes instanceof Object); // true
lenguajes.push('Cobol');

// Propiedades
// - Orden:son ordenados, tienen índices de 0...n
// - Tipos de datos: cualquier tipo de dato (primitivos o complejos) => heterógeneos
let variosTipos = [true, 3.14, "soy una cadena", [1, 2], 'elemento a borrar'];
console.log(variosTipos);
// - Mutabilidad: si, pueden cambiar la cantidad, los valores o tipos.

variosTipos.pop();
console.log(variosTipos);
variosTipos[2] = 'Codo a codo';
console.log(variosTipos);
variosTipos[0] = 5;
console.log(variosTipos);
variosTipos.push(false);
console.log(variosTipos);

// Recorrido
console.log(`Cant. de lenguajes: ${lenguajes.length}`);
let listaArray = document.querySelector('#listaArray');

// ...utilizando bucle for.
// for (let i = 0; i < lenguajes.length; i++) {
//     let item = document.createElement('li');
//     item.className = 'itemLista';
//     item.innerHTML = lenguajes[i];
//     listaArray.appendChild(item);
// }

// ...utilizando for... of - exclusivo de los array´s
for (let elemento of lenguajes) {
    let item = document.createElement('li');
    item.className = 'itemLista';
    item.innerHTML = elemento;
    listaArray.appendChild(item);
}


// Referencia POO // en JS es "SINTACTIC SUGAR"... porque siempre son PROTOTIPOS!!!
// class Persona {};
// class Usuario extends Personas {};
// class Admin extends Personas {};

// let user = new Usuario();
