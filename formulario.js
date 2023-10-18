function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;
    const celular = document.getElementById('celular').value;
    const pais = document.getElementById('pais').value;
    const ciudad = document.getElementById('ciudad').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const contrasena = document.getElementById('contrasena').value;
    const repetirContrasena = document.getElementById('repetirContrasena').value;

    // Validar que todos los campos estén completos
    if (nombre === "" || apellido === "" || email === "" || edad === "" || celular === "" || pais === "" || ciudad === "" || domicilio === "" || codigoPostal === "" || contrasena === "" || repetirContrasena === "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Validar que la edad sea un número
    if (isNaN(edad)) {
        alert("La edad debe ser un número.");
        return false;
    }

    // Validar que las contraseñas coincidan
    if (contrasena !== repetirContrasena) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    return true;
}