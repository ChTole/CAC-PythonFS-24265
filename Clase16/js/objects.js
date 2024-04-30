// Object (objecto)
let lenguaje = {
    nombre: 'Python',
    interpretado: true
}

console.log(lenguaje);
console.log(typeof lenguaje);
console.log(lenguaje instanceof Object);

// Orden: no son ordenados
console.log(lenguaje.nombre); // notación de punto
console.log(lenguaje["nombre"]); // Python dict

let lenguajesVarios = [
    {
        nombre: "Python",
        interpretado: true,
        versiones: [1, 2, 3]
    },
    {
        nombre: 'Java',
        interpretado: false,
        versiones: [15, 16, 17]
    },
    {
        nombre: 'JavaScript',
        interpretado: true
    }
];