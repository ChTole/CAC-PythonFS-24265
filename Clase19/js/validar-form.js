// Validación del formulario
console.log('Comienzo');

function validarForm() {
    let edad = document.querySelector('#edad').value;
    let respuestaEdad = document.querySelector('#rtaFormEdad');
    
    let nombre = document.querySelector('#nombre').value;
    let respuestaNombre = document.querySelector('#rtaFormNombre');

    let soloLetrasConEspacio = /^[a-zA-Z]+\s*[a-zA-Z]+$/;

    if (soloLetrasConEspacio.test(nombre)) {
        respuestaNombre.innerHTML = 'Dato correcto.';
    } else {
        respuestaNombre.innerHTML = 'Por favor coloque un nombre válido.';
    }

    // if (!Number.isNaN(Number(edad))){
    if (Number.isInteger(Number(edad))){
        console.log('No es NaN!')
        if (edad >= 18) { // '40' > 18
            respuestaEdad.innerHTML = 'Sos mayor de edad';
            respuestaEdad.className = 'correcto';
        } else {
            respuestaEdad.innerHTML = 'Sos menor de edad';
            respuestaEdad.className = 'correcto';
        }
    } else {
        respuesta.innerHTML = 'Dato incorrecto!';
        respuesta.className = 'error';
    }
}

const formulario = document.querySelector('form');

formulario.addEventListener('submit', evento => {
    validarForm();
    evento.preventDefault();
});

console.log('Fin del algoritmo.');