//Menu Hamburguesa
document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function () {
        menu.classList.toggle('active');
    });
});

const validarFormContacto =(e) => {
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const messageInput = document.getElementById('message').value;
    console.log(messageInput);
   
   

    //Expresiones regulares

    // Expresión regular para validar un nombre (solo letras y espacios)
    const nombreRegex = /^[A-Za-z\s]+$/;

    // Expresión regular para validar un apellido (solo letras y espacios)
    const apellidoRegex = /^[A-Za-z\s]+$/;

    // Expresión regular para validar un email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Expresión regular para validar consulta
    const messageRegex = /^[A-Za-z0-9\s]+$/;

    

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

    if (!messageRegex.test(messageInput)) {
        const errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'La consulta contiene caracteres no válidos';
        document.getElementById('message').classList.add('textarea-error');
        e.preventDefault();
  
    }


    return true;
}

formContacto.addEventListener('submit', validarFormContacto)