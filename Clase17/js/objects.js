// Object (objecto)
let lenguaje = {
    nombre: 'Python', // clave: valor,
    interpretado: true,
    // {prop1: false}: , // claves: obj NO!!!
    3.14: false,
    "otra clave": [],
}

console.log(lenguaje);
console.log(typeof lenguaje);
console.log(lenguaje instanceof Object);

// Orden: no son ordenados
console.log(lenguaje.nombre); // notación de punto
console.log(lenguaje["nombre"]); // Python dict

// Tipos de datos: - sobre los valores no hay restricciones => heterógeneos
//                 - las claves: number, string o cadenas de varias palabras en comillas dobles.
console.log(lenguaje["3.14"]);
console.log(lenguaje["otra clave"]);
// console.log(lenguaje.3.14); // no funciona

// Mutabilidad: 
// - Son mutables, puedo modificar los valores, agregar y eliminar claves.
lenguaje["3.14"] = "Constante Pi";
lenguaje.constantePi = "Constante Pi";
console.log(lenguaje);
lenguaje.tipado = "fuertemente y dinámico"
console.log(lenguaje);

console.log(lenguaje.version);

delete lenguaje.constantePi;
console.log(lenguaje);

// Recorrer el object con for....in
for (let clave in lenguaje) {
    console.log(`clave: ${clave} - valor: ${lenguaje[clave]}`); 
}

console.log(Object.keys(lenguaje));

let listaObj = document.querySelector('#listaObject');

for (let clave of Object.keys(lenguaje)) {
    let item = document.createElement('li');
    item.innerHTML = lenguaje[clave];
    listaObj.appendChild(item);
}

// LAS CLAVES SON ÚNICAS!!!

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