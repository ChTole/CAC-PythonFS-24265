// Funciones
// Fundamento: encapsular código para su reutilización y para poder modularizar una solución.

// Tiempos de una función:
// 1° - Declaración
// 2° - Invocación o llamada.
// JS es flexible respecto al orden, ya que en una primera lectura almacena todas la definiciones en primer lugar. Es recomendable respetarlo porque en otros lenguajes ésto no es así.

// Definición
function saludar() {
    let usuario = 'Christian';
    let frase = `Hola, soy ${usuario}`;
    console.log(frase);
}

// Invocación
saludar();

// **********************************
// Parámetros
function saludarPersona(nombre) {
    let frase = `Hola, soy ${nombre}`;
    console.log(frase);
}

saludarPersona('Ariel');
saludarPersona('Toledo');
saludarPersona(); // 'undefined'

// **********************************
// Retorno
let parrafo = document.querySelector('#saludo');

function saludarEnHTML (nombre, comision) {
    let frase = `Hola! soy ${nombre} de la comisión ${comision}`;
    return frase; // retorno el valor de la variable
    // luego del retorno no se ejecuta nada
    // NUNCA USAR EL RETORNO VACÍO PARA FINALIZAR LA FUNCIÓN!!!
    console.log(frase);
}

parrafo.innerHTML = saludarEnHTML('Christian', 24265);


// EL "NO" EJEMPLO!!!!
// function saludar(comision) {
//     if (comision != 24265) {
//         console.warn('EL DATO NO ME SIRVE');
//         // return // NUNCA!!!!!! MALA PRÁCTICA!!!!! 
//     } else {
//         return 'Hola comisión ', comision;
//     }   
// }

// Funciones como expresiones
// Pueden ser funciones anónimas
const saludo = function (nombre, comision) { // función anónima
    let frase = `Hola! soy ${nombre} de la comisión ${comision}`;
    return frase;
}

parrafo.innerHTML = saludo('Ariel', 55555);