
function cargarDatos(url) {
    let dinamico = document.querySelector('#dinamico');
    fetch(url)
        .then(respuesta => respuesta.text()) // ó .json()
        .then(datos => dinamico.innerHTML = datos);
}


async function cargarPagina(pagina, datosDinamicos){
    console.log('Entró a la función');
    let principal = document.querySelector('#contenido');
    let datos = await fetch(pagina)
                        .then(respuesta => respuesta.text())
                        .catch("404 - Algo salió mal!");
    principal.innerHTML = datos;
    // Cargar los datos externos
    if (datosDinamicos) {
        cargarDatos(datosDinamicos);
    }
    console.log('Fin de la función');
}

// // 1° escucho el evento
// window.addEventListener("DOMContentLoaded", evento => cargarPagina());

export { cargarPagina };