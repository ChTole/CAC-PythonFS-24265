console.log('Comienzo');
// API fetch

function mostrarDatos(datos) {
    let lista = document.querySelector('#datosExternos');
    for (let dato of datos){
        let item = document.createElement('li');
        item.innerHTML = `${dato.id} - ${dato.nombre}`;
        lista.appendChild(item);
    }
}

// Devuelve promesa: pendiente, cumplida o rechazada

fetch('./data/lenguajes.json')
    .then(respuesta => respuesta.json()) // respuesta y extraigo datos
    .then(datos => mostrarDatos(datos)) // procesarlos
    .catch(error => console.warn('Algo salió mal!', error)); // manejo el error


console.log('Fin del algoritmo');