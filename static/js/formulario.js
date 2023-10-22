const validarFormulario =(e) => {
    
    const nombre = document.getElementById('nombre').value;
    //console.log(nombre);
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const edad = document.getElementById('edad').value;
    const pais = document.getElementById('pais').value
    const ciudad = document.getElementById('ciudad').value;
    const domicilio = document.getElementById('domicilio').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const contrasena = document.getElementById('contrasena').value;
    console.log("Este es el:",pais);
    const repetirContrasena = document.getElementById('repetirContrasena').value;

    //const nombre = document.querySelector('#nombre');
   
   

    //Expresiones regulares

    // Expresión regular para validar un nombre (solo letras y espacios)
    const nombreRegex = /^[A-Za-z\s]+$/;

    // Expresión regular para validar un apellido (solo letras y espacios)
    const apellidoRegex = /^[A-Za-z\s]+$/;

    // Expresión regular para validar un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar la edad (número entero)
    const edadRegex = /^\d+$/;

    // Expresión regular para validar domicilio
    const domicilioRegex = /^[A-Za-z0-9\s]+$/;

    // Expresión regular para validar el código postal (formato específico)
    const codigoPostalRegex = /^\d{4}$/;

    // Expresión regular para validar la contraseña (al menos 8 caracteres)
    const contrasenaRegex = /^.{6,}$/;

    //Validaciones

    if (!nombreRegex.test(nombre)) {
        const errorNombre = document.getElementById('error-firstname');
        document.getElementById('nombre').classList.add('input-error');
        errorNombre.textContent = "Escribe un Nombre Valido";
        e.preventDefault();
       
    }
    if (!apellidoRegex.test(apellido)) {
        const errorApellido = document.getElementById('error-lastname');
        errorApellido.textContent ="Apellido no válido";
        document.getElementById('apellido').classList.add('input-error');
        e.preventDefault();
       
    }

    if (!emailRegex.test(email)) {
        const errorEmail = document.getElementById('error-email');
        errorEmail.textContent ="Email no válido";
        document.getElementById('email').classList.add('input-error');
        e.preventDefault();
        
    }

    if (!edadRegex.test(edad)) {
        const errorEdad = document.getElementById('error-edad');
        errorEdad.textContent="Edad no válida";
        document.getElementById('edad').classList.add('input-error');
        e.preventDefault();
       
    }

    if (pais === ""){
        const errorPais = document.getElementById('error-pais');
        document.getElementById('pais').classList.add('input-error');
        errorPais.textContent = "Por favor, selecciona un país.";
        e.preventDefault();
       
    }

   

    if(!domicilioRegex.test(domicilio)){
        const errorDomicilio = document.getElementById('error-domicilio');
        errorDomicilio.textContent = "domicilio no válido";
        document.getElementById('domicilio').classList.add('input-error');
        e.preventDefault();
        
    }

    if (!codigoPostalRegex.test(codigoPostal)) {
        const errorCodigoPostal = document.getElementById('error-codigopostal');
        errorCodigoPostal.textContent = "Código postal no válido";
        document.getElementById('codigoPostal').classList.add('input-error');
        e.preventDefault();
        
    }

    if (!contrasenaRegex.test(contrasena)) {
        const errorContrasena = document.getElementById('error-contrasena');
        errorContrasena.textContent = "Contraseña no válida";
        document.getElementById('contrasena').classList.add('input-error');
        e.preventDefault();
        
    }

    if (contrasena !== repetirContrasena) {
        const errorRepetir = document.getElementById('error-repetirContrasena');
        errorRepetir.textContent = "Las contraseñas no coinciden";
        document.getElementById('contrasena').classList.add('input-error');
        document.getElementById('repetirContrasena').classList.add('input-error');
        e.preventDefault();
      
    }


   

    
    

    

    return true;
}

formRegister.addEventListener('submit', validarFormulario)

//Menu Hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});