// Comentario de una línea

/* 
Comentario 
de mas
de una línea
*/

console.log("Desde mi script!");

// Apunte DOM
// https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model/Introduction

// alert("Esto pertenece a la ventana(window)!");

window.console.log(document.querySelector('h1'));

// 0-Interpretado, ejecución del lado del cliente, alto nivel.

// 1-Tipos de datos

// Primitivos
// Boolean, Number, BigInt, String, Symbol y undefined

// Complejos
// Array - arreglo (vector) -> Python == Listas
// Object - objeto (atributos y métodos) -> Python == Diccionarios

// 2-Debilmente tipado ???

// 3-Variables
// Nombres de variables: 
// - No usar palabras reservadas ni elementos (objetos) del DOM.
// - Pueden comenzar con una letra, guión bajo o el signo dólar ($).
// - No puedene empezar con números (sixtaxis)
// - Evitar caracteres especiales: ñ, á, ä, etc.
// - TRATAR QUE SEAN REFERENCIALES DE SU CONTENIDO!!!

// Existen 3 formas, 1 está discontinua:

// Manera discontinua
var numero1; // declaración
console.log(numero1);

// Tipado dinámico
numero1 = "cinco"; // asignación
console.log(numero1, typeof numero1);

numero1 = 5; // reasignación
console.log(numero1, typeof numero1);

// Varias palabras => camelCase
// EL PROBLEMA DE VAR ********************
var nombreApellido = "Christian Toledo"; // declaro y asigno en un mismo paso.
console.log(nombreApellido);
// ...200 líneas...
var nombreApellido = "Ariel Toledo"; //
console.log(nombreApellido);
// EL PROBLEMA DE VAR ********************

let miBooleano = true;
console.log(miBooleano);

miBooleano = false;
console.log(miBooleano);

// ...

// let miBooleano = "Algo verdadero"; // Uncaught SyntaxError: Identifier 'miBooleano' has already been declared
miBooleano = "Algo verdadero";
console.log(miBooleano);

// MUY MALA PRÁCTICA => POR FLEXIBILIDA DEL LENGUAJE
// nuevaVariable = "Soy una cadena"; // Podemos intuir que aplicó "let"
// console.log(nuevaVariable);

// ...20 líneas...
let nuevaVariable = "123"; // LANZA EXCEPCIÓN SIN COMENTAR LÍNEA 71
// Uncaught ReferenceError: Cannot access 'nuevaVariable' before initialization
console.log(nuevaVariable);

// Constante
const unaConstante = "Nadie me modifica";
console.log(unaConstante, typeof unaConstante);

unaConstante = false; // Uncaught TypeError: Assignment to constant variable.
console.log(unaConstante, typeof unaConstante);
