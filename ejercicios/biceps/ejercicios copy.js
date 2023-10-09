// Función para actualizar el contador y redirigir
function actualizarContador() {
    var contadorElement = document.getElementById("contador");
    var valor = parseInt(contadorElement.innerText);

    if (valor > 0) {
        contadorElement.innerText = (valor - 1).toString();
    } else {
        // Redirige a pantalla2.html cuando el contador llega a 0
        window.location.href = "pantalla5.html";
    }
}

// Actualiza el contador cada segundo
setInterval(actualizarContador, 1000);