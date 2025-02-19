// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let numeroMaximoAmigos = 11;
let regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function limpiarCaja() {
    document.querySelector('#amigo').value = '';
}

function mostrarAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = listaAmigos.map(amigo => `<li>${amigo}</li>`).join('');
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    console.log (nombre)
    if (!regex.test(nombre)) {
        asignarTextoElemento('h2', 'Ingresa un nombre válido');
    } else if (listaAmigos.includes(nombre)) {
        asignarTextoElemento('h2', 'Nombre repetido, ingresa otro');
    } else if (listaAmigos.length >= numeroMaximoAmigos) {
        asignarTextoElemento('h2', 'No puedes agregar más amigos, has alcanzado el límite');
    } else {
        listaAmigos.push(nombre);
        mostrarAmigos();
    }

    limpiarCaja();
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        asignarTextoElemento('h2', 'Aún no has ingresado ningún nombre en la lista');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];

    asignarTextoElemento('#resultado', `<li>Tu amigo secreto es: ${amigoSecreto}</li>`);

    // Deshabilitar el botón de sorteo después de elegir
    document.getElementById('sortear').setAttribute('disabled', 'true');
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del Amigo Secreto');
    asignarTextoElemento('h2', `Añade hasta ${numeroMaximoAmigos} amigos y luego sortea un nombre al azar`);
    asignarTextoElemento('#resultado', '');
    listaAmigos = [];
    mostrarAmigos();
    document.getElementById('sortear').removeAttribute('disabled');
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
}

// Inicia el juego con el estado inicial
condicionesIniciales();
