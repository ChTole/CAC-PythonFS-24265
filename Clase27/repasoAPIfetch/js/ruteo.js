import { cargarPagina } from "./api-fetch-sincro.js";

const rutas = {
    inicio: ['./sitio/inicio.html'],
    datos: ['./sitio/datos.html', 'https://jsonplaceholder.typicode.com/users']
}


function mostrarHash() {
    let actualHash = window.location.hash.substring(1,);
    if (actualHash in rutas) {
        console.log("existe");
        let destino = rutas[actualHash];
        cargarPagina(destino[0], destino[1]);
    } else if (actualHash === "") {
        console.log("se cargo desde 0")
        cargarPagina(rutas.inicio[0]);
    } else {
        console.log("No existe!")
    }
    
}




window.addEventListener('DOMContentLoaded', evento => mostrarHash());
window.addEventListener('hashchange', evento => mostrarHash());