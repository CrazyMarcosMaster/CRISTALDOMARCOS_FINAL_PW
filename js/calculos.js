// ==========================
// CALCULADORA INTERACTIVA
// ==========================
function getValores() {
    const n1 = parseFloat(document.getElementById('num1').value);
    const n2 = parseFloat(document.getElementById('num2').value);
    const resultadoEl = document.getElementById('resultado');
    return { n1, n2, resultadoEl };
}

function mostrarResultado(resultadoEl, mensaje, color = "green") {
    resultadoEl.innerText = mensaje;
    resultadoEl.style.color = color;
}

function validar(n1, n2, resultadoEl) {
    if (isNaN(n1) || isNaN(n2)) {
        mostrarResultado(resultadoEl, "⚠️ Por favor ingresa números válidos en ambos campos.", "red");
        return false;
    }
    return true;
}

function sumar() {
    const { n1, n2, resultadoEl } = getValores();
    if(!validar(n1, n2, resultadoEl)) return;
    mostrarResultado(resultadoEl, `🎉 La suma de ${n1} + ${n2} es: ${n1 + n2}`);
}

function restar() {
    const { n1, n2, resultadoEl } = getValores();
    if(!validar(n1, n2, resultadoEl)) return;
    mostrarResultado(resultadoEl, `🎉 La resta de ${n1} - ${n2} es: ${n1 - n2}`);
}

function multiplicar() {
    const { n1, n2, resultadoEl } = getValores();
    if(!validar(n1, n2, resultadoEl)) return;
    mostrarResultado(resultadoEl, `🎉 La multiplicación de ${n1} × ${n2} es: ${n1 * n2}`);
}

function dividir() {
    const { n1, n2, resultadoEl } = getValores();
    if(!validar(n1, n2, resultadoEl)) return;
    if(n2 === 0){
        mostrarResultado(resultadoEl, "⚠️ No se puede dividir entre cero.", "red");
        return;
    }
    mostrarResultado(resultadoEl, `🎉 La división de ${n1} ÷ ${n2} es: ${n1 / n2}`);
}
