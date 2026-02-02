// Validación del formulario
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Validar nombre
    let nombre = document.getElementById('nombre');
    if (nombre.value === '') {
        nombre.classList.add('is-invalid');
    } else {
        nombre.classList.remove('is-invalid');
    }

    // Validar email
    let email = document.getElementById('email');
    if (email.value === '') {
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    // Validar mensaje
    let mensaje = document.getElementById('mensaje');
    if (mensaje.value === '') {
        mensaje.classList.add('is-invalid');
    } else {
        mensaje.classList.remove('is-invalid');
    }

    // Si todos los campos son válidos, mostrar mensaje de éxito
    if (!nombre.classList.contains('is-invalid') && !email.classList.contains('is-invalid') && !mensaje.classList.contains('is-invalid')) {
        alert('¡Formulario enviado exitosamente!');
    }
});

// Botón de alerta
function showAlert() {
    alert("¡Este es un mensaje de alerta!");
}
