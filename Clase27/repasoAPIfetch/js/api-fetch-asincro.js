// 2° defino la carga del contenido
function cargarPagina() {
    console.log("Entró a la función");
    let principal = document.querySelector('#contenido');
    // let datos = fetch('./sitio/inicio.html').then(respuesta => respuesta.text());
    fetch('./sitio/inicio.html')
        .then(respuesta => respuesta.text())
        .then(datos => principal.innerHTML = datos)
        .catch(principal.innerHTML = '404 - Algo salió mal!');
    console.log("Fin de la función");
}

// 1° escucho el evento
window.addEventListener("DOMContentLoaded", evento => cargarPagina());