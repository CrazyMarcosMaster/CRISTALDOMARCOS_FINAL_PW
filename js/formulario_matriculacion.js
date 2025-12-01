// ==========================
// FORMULARIO DE MATRICULACIÓN INTERACTIVO
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('matricForm');
    const resultEl = document.getElementById('matricResult');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();
        const edad = parseInt(document.getElementById('edad').value);

        if (!nombre || !apellido || isNaN(edad)) {
            resultEl.innerText = "⚠️ Complete todos los campos correctamente.";
            resultEl.style.color = "red";
            return;
        }

        if (edad < 0) {
            resultEl.innerText = "⚠️ La edad no puede ser negativa.";
            resultEl.style.color = "red";
            return;
        }

        const mensaje = edad >= 18
            ? "🎉 ¡Puede matricularse sin problemas!"
            : "❌ Lo sentimos, aún es menor de edad para matricularse.";

        resultEl.innerText = `Alumno: ${nombre} ${apellido}. Edad: ${edad}. ${mensaje}`;
        resultEl.style.color = edad >= 18 ? "green" : "orange";
    });
});
