import{ barcelona, roma, paris, londres } from './ciudades.js'

// Obtener los elementos del DOM
let enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

// Agregar un evento Click a cada enlace 
enlaces.forEach(function(enlace) {
    enlace.addEventListener('click', function() {

        // Remover el Activo
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active');
        });

        // Agregar activo
        this.classList.add('active')

        // Obtener contenido
        

    })

});

// Función para traer Info
function obtenerContenido(enlace) {

    let contenido = {
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };

    return contenido[enlace];
};