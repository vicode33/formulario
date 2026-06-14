const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(e) {

    e.preventDefault();

    const usuario = document.getElementById("nombre").value.trim();
    const password = document.getElementById("pass").value.trim();
    const correo = document.getElementById("correo").value.trim();

    // Usuario: letras y números, mayúsculas y minúsculas
    const regexUsuario = /^[a-zA-Z0-9]+$/;

    // Contraseña: mínimo 8 caracteres,
    // al menos una mayúscula, una minúscula y un número
    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    // Correo válido
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regexUsuario.test(usuario)) {
        alert("El usuario solo puede contener letras y números.");
        return;
    }

    if (!regexPassword.test(password)) {
        alert("La contraseña debe tener mínimo 8 caracteres, una mayúscula, una minúscula y un número.");
        return;
    }

    if (!regexCorreo.test(correo)) {
        alert("Ingrese un correo electrónico válido.");
        return;
    }

    //alert("Su correo ha sido enviado.");
    Swal.fire({
    title: '¡Correcto!',
    text: 'Formulario enviado con éxito',
    icon: 'success'
});

    // Limpiar formulario
    formulario.reset();

});