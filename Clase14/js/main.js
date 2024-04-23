// OPERADORES
// **************************************************
// Aritméticos: + , - , * , / , ** , %
// **************************************************
// Precedencia es igual que en las matemáticas que conocemos
let operacionMatematica = 5 ** 3 * 2 - 100 + 5 % 2 - 4
//                         125 * 2   - 100 +   1  -  4
//                          250   - 100  + 1  - 4  = 147
console.log(operacionMatematica);

// **************************************************
// De comparación: < , > , <= , >= , == , != (devuelven booleanos)
// **************************************************
let mayorEdad = 43 > 18; // true
let combinacionOperadores = 4 * 2 > 15 / 3; //  1ro se resuelven los aritméticos, luego la comparación
console.log(combinacionOperadores);

// Identidad === , !==
let esIgual = "4" == 4; // true
esIgual = "4" === 4; // false

// **************************************************
// Lógicos: && (conjunción ó «y»), || (disyunción u «ó») y ! (negación -unario-) también devuelven booleanos.
// **************************************************
// Conjunción &&
// 1ra proposición: Si el día está lindo,       true    false
// 2da proposición: «Y» tenemos tiempo,         true    true
// Resultado:       salimos a caminar.          true    false
console.log(true && true);  // true
console.log(false && true); // false
console.log(true && false); // false
console.log(false && false); //false
// Para obtener true, ambos operandos deben ser true.

// Disyunción ||  alt 124
// 1ra proposición: Si vos estás en el shopping,        true    false   true    false
// 2da proposición: «Ó» yo estoy en el shopping,        false   true    true    false
// Resultado:       alguno le compra el regalo a mamá.  true    true    true    false
console.log(true || false); // true
console.log(false || false); // false
// Para obtener true, sólo necesito que uno sea true.

// Negación   !
console.log(!true); // false
console.log(!false); // true

// PRECEDENCIA DE OPERADORES
// 1° Aritméticos (teniendo en cuenta su precedencia)
// 2° De comparación  e identidad
// 3° Lógicos: -> Negación -> Conjunción -> Disyunción
let operadoresCombinados = 5 ** 3 > 301 % 3 && !true || "hola" !== "HOLA";
//                          125   >   1     && !true || "hola" != "HOLA";
//                              true        && !true ||   true
//                              true        && false ||   true  = true
console.log(operadoresCombinados);

// CUADROS DE DIÁLOGO (alert, prompt, confirm)
// No son de uso habitual, pero en éste punto nos sirven para interactuar con nuestra página, sitio o aplicación.
// Estos mensajes automatizados tienen dos inconvenientes:
// No hay una forma estándar de cambiar su aspecto con CSS.
// Dependen de la configuración regional del navegador, lo que significa que puedes tener una página en un idioma pero un mensaje de error en otro idioma.

// Alerta
// alert("Mensaje");

// Ingreso de dato
// let datoIngresado = prompt('Ingrese un número:'); // SIEMPRE DEVUELVE STRING
// console.log(datoIngresado, typeof datoIngresado);

// datoIngresado = Number(datoIngresado); // "casteo" o conversión del dato a número
// console.log(datoIngresado, typeof datoIngresado);

// Confirmación
let confirma = confirm('¿Está de acuerdo?');
console.log(confirma, typeof confirma);


