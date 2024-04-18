// OPERADORES
// Permiten crear expresiones.

// Operadores aritméticos
// + Suma: tener en cuenta que no sólo suma, prioriza la concatenación de acuerdo a los operando recibidos
// Tener en cuenta que JS es debilmente tipado
let suma = "123" + 1; // asigno una expresión, guardo el resultado
console.log(suma, typeof suma);

// Conversión del dato
suma = Number("123") + 1
//       "casteo" 
console.log(suma, typeof suma);

// - Resta 
let resta = "123" - 1;
console.log(resta, typeof resta);

let frase = "Hola mundo" - 2;
console.log(frase, typeof frase);

// / División
// * Multiplicación
// ** Potencia
// % Módulo o resto
let miResto = 9 % 3 // 9 / 3 = 3 => resto = 0
console.log(miResto, typeof miResto);

miResto = 26 % 5; // 1
console.log(miResto, typeof miResto);
// Precedencia: misma que en matemáticas
// () -> potencias o raíces -> multi o division -> sumas y restas

// Operadores de comparación: expresiones que devuelven booleanos
// > Mayor que
// < Menor que
// >= Mayor o igual
// <= Menor o igual
// == Igual a
// != Distinto a

let nroMayor = 5 > 2; // true
console.log(nroMayor, typeof nroMayor);

nroMayor = 3 * 2 <= 20 / 2; // Primero los aritméticos, luego la comparación
//          6   <=  10
console.log(nroMayor, typeof nroMayor);

let otraComparacion = "5" == 5; // true
//                    "5" == String(5); // evalúa literales
console.log(otraComparacion, typeof otraComparacion);

// Identidad ===  //  !==
otraComparacion = "5" === 5; 
console.log(otraComparacion, typeof otraComparacion);
// Operadores lógicos