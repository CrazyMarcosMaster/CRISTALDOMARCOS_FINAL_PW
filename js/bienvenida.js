document.addEventListener('DOMContentLoaded', () => {
    // Solo ejecutar en index.html
    if (window.location.pathname.endsWith("index.html") && !sessionStorage.getItem('bienvenida')) {
        const nombre = prompt("Ingrese su nombre:");
        const apellido = prompt("Ingrese su apellido:");
        const edad = parseInt(prompt("Ingrese su edad:"), 10);

        let mensajeEdad;
        if (!isNaN(edad)) {
            mensajeEdad = edad > 20 ? "Tienes más de 20 años" : "Eres menor de 20 años";
        } else {
            mensajeEdad = "Edad no válida";
        }

        const mensaje = `Hola <strong>${nombre} ${apellido}</strong>. ${mensajeEdad}. ¡Bienvenido al sitio!`;

        sessionStorage.setItem('bienvenida', mensaje);
    }

    // Mostrar mensaje
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    if(mensajeBienvenida){
        mensajeBienvenida.innerHTML = sessionStorage.getItem('bienvenida') || "¡Bienvenido!";
    }
});
