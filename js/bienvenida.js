document.addEventListener('DOMContentLoaded', () => {

    // Detectar si estamos realmente en la página principal
    const esInicio =
        window.location.pathname === "/" ||             // GitHub Pages
        window.location.pathname.endsWith("index.html"); // Uso local

    if (esInicio && !sessionStorage.getItem('bienvenida')) {

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

        // Guardar para mostrarlo sin volver a pedir datos
        sessionStorage.setItem('bienvenida', mensajeFinal);
    }

    // Mostrar el mensaje en pantalla
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    if (mensajeBienvenida) {
        mensajeBienvenida.innerHTML =
            sessionStorage.getItem('bienvenida') || "¡Bienvenido!";
    }
});
