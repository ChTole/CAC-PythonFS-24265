// Validación del formulario
console.log('Comienzo');

const formulario = document.querySelector('form');

formulario.addEventListener('submit', event => {
    let edad = document.querySelector('#edad').value;
    console.log(edad);
    if (edad >= 18) {
        document.querySelector('#rtaForm').innerHTML = 'Sos mayor de edad';
    } else {
        document.querySelector('#rtaForm').innerHTML = 'Sos menor de edad';
    }
    event.preventDefault();
});


console.log('Fin del algoritmo.');