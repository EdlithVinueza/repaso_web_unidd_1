let puntaje = 0;
let intentos = 0;

const opcionCorrecta = 'excadrill';

// Función para mostrar mensaje
function mostrarMensaje(mensaje, color) {
    // Seleccionamos el elemento mensaje
    const mensajeDiv = document.getElementById("mensaje");
    // Le asignamos el mensaje
    mensajeDiv.innerText = mensaje;
    // Le asignamos estilos
    mensajeDiv.style.backgroundColor = color;
    mensajeDiv.style.border = "1px solid black";
    mensajeDiv.style.color = "white";
    // Nota: el tipo de letra está en el CSS
}

// Función para reiniciar juego
function reiniciarJuego() {
    // Reiniciamos las variables
    puntaje = 0;
    intentos = 0;
    document.getElementById("puntaje").innerText = `Puntaje: ${puntaje}`;
    document.getElementById("intentos").innerText = `Intentos: ${intentos}`;
    document.getElementById("mensaje").innerText = ''; // Limpiamos el mensaje
    document.getElementById('imagen-pokemon').src = 'img/pnegro.jpg'; // Cambia a la imagen inicial
}

// Función para seleccionar la opción
function seleccionarOpcion(opcion) {
    intentos++;
    // Vamos actualizando el intento en cada llamada
    document.getElementById("intentos").innerText = `Intentos: ${intentos}`;

    if (opcion === opcionCorrecta) {
        let puntosGanados = 0;
        if (intentos === 1) {
            puntosGanados = 5;
        } else if (intentos === 2) {
            puntosGanados = 3;
        } else if (intentos === 3) {
            puntosGanados = 1;
        }
        puntaje += puntosGanados;
        document.getElementById('puntaje').innerText = `Puntaje: ${puntaje}`;
        mostrarMensaje(`Felicitaciones, has seleccionado la opción correcta`, 'blue');
        document.getElementById('imagen-pokemon').src = 'img/pcolor.jpg'; // Cambia a la imagen correcta
    } else {
        mostrarMensaje(`Pokémon incorrecto, inténtalo nuevamente`, 'red');
    }

    if (intentos >= 3 && puntaje < 5) {
        reiniciarJuego();
    }
}