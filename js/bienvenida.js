document.addEventListener('DOMContentLoaded', () => {
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');

    if (mensajeBienvenida && !sessionStorage.getItem('bienvenida')) {

        const nombre = prompt("Ingrese su nombre:");
        const apellido = prompt("Ingrese su apellido:");
        const edad = parseInt(prompt("Ingrese su edad:"), 10);

        let mensajeEdad;

        if (!isNaN(edad)) {
            mensajeEdad = edad > 20 ? "Tienes más de 20 años" : "Eres menor de 20 años";
        } else {
            mensajeEdad = "Edad no válida";
        }

        const mensajeFinal =
            `Hola <strong>${nombre} ${apellido}</strong>. ${mensajeEdad}. ¡Bienvenido al sitio!`;

        sessionStorage.setItem('bienvenida', mensajeFinal);
        mensajeBienvenida.innerHTML = mensajeFinal;
    } else if (mensajeBienvenida) {
        // Mostrar mensaje guardado si ya existe
        mensajeBienvenida.innerHTML = sessionStorage.getItem('bienvenida');
    }
});
