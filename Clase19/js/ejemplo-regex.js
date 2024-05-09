// Expresiones regulares
// Permiten buscar patrones

let regex1 = /c.t/; 
// que contenga con "c", cualquier caracter en el medio y luego una "t"

console.log(regex1.test('cat'));
//                       c.t
console.log(regex1.test('acotar'));
//                        c.t
console.log(regex1.test('acortar'));
//                        c..t

// Sólo letras
let soloLetrasConEspacio = /^[a-zA-Z]+\s[a-zA-Z]+$/ // mayúsculas y minúsculas

console.log(soloLetrasConEspacio.test('Christian'));
console.log(soloLetrasConEspacio.test('Christian43'));
console.log(soloLetrasConEspacio.test('Christian Toledo'));