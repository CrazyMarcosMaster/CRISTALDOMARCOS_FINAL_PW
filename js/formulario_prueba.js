// ==========================
// FORMULARIO DE PRUEBA INTERACTIVO
// ==========================
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('pruebaForm');
    const resultEl = document.getElementById('pruebaResult');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const correo = document.getElementById('correo').value.trim();
        const pass = document.getElementById('pass').value.trim();

        if (!correo || !pass) {
            resultEl.innerText = "⚠️ Complete ambos campos antes de enviar.";
            resultEl.style.color = "red";
            return;
        }

        if (!validateEmail(correo)) {
            resultEl.innerText = "⚠️ Ingrese un correo electrónico válido.";
            resultEl.style.color = "red";
            return;
        }

        resultEl.innerText = `✅ Correo: ${correo} registrado correctamente.\n🔒 Contraseña aceptada.`;
        resultEl.style.color = "green";
    });

    // ==========================
    // VALIDACIÓN DE CORREO
    // ==========================
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }
});
