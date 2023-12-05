const API_SERVER = 'http://127.0.0.1:8000';

// Función para realizar la petición fetch
async function fetchData(url, method, data = null) {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: data ? JSON.stringify(data) : null,
    };

    const response = await fetch(url, options);
    return await response.json();
}

async function fetchDataWithFile(url, method, formData) {
    const options = {
        method: method,
        body: formData,
    };

    const response = await fetch(url, options);
    return await response.json();
}

document.getElementById('btn-add-users').addEventListener('click', async function () {
    const idUser = document.querySelector('#id_user');
    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const email = document.querySelector('#email').value;
    const edad = document.querySelector('#edad').value;
    const pais = document.querySelector('#pais').value;
    const ciudad = document.querySelector('#ciudad').value;
    const domicilio = document.querySelector('#domicilio').value;
    const codigoPostal = document.querySelector('#codigoPostal').value;
    const contrasena = document.querySelector('#contrasena').value;
    console.log("nombre",nombre)
    console.log("apellido",apellido)
    console.log("email",email)
    console.log("edad",edad)
    console.log("pais",pais)
    console.log("ciudad",ciudad)
    console.log("domicilio",domicilio)
    console.log("contrasena",contrasena)
    //manejo de archivos
    const avatarFileInput = document.querySelector('#avatar-form');
    const avatar = avatarFileInput.files[0];

    const formData = new FormData();
    formData.append('nombre', nombre);
    formData.append('apellido', apellido);
    formData.append('email',email);
    formData.append('edad', edad);
    formData.append('pais', pais);
    formData.append('ciudad',ciudad);
    formData.append('domicilio', domicilio);
    formData.append('codigoPostal',codigoPostal);
    formData.append('contrasena',contrasena);
    formData.append('avatar', avatar);
    let result = null;
    console.log("este es el form",formData)
    if(idUser.value!==""){
      result = await fetchDataWithFile(`${API_SERVER}/api/update_user/${idUser.value}/`, 'PUT', formData);
    }else{
      result = await fetchDataWithFile(`${API_SERVER}/api/create_user/`, 'POST', formData);
    }
    const formUsers = document.querySelector('#form-users');
    idUser.value=''
    formUsers.reset();
    alert(result.message);

    showUsersTable();
});

/**
* Funcion que permite crear un elemento <tr> para la tabla de peliculas
* por medio del uso de template string de JS.
*/
async function showUsersTable(){
    let users =  await fetchData(API_SERVER+'/api/users/', 'GET');
    const tableUsers = document.querySelector('#list-table-users tbody');
    console.log("Este es la tabla:",tableUsers);
    tableUsers.innerHTML='';
    users.forEach((user, index) => {
        console.log("este es id",user.id)
      let tr = `<tr>
                    <td>${user.nombre}</td>
                    <td>${user.apellido}</td>
                    <td>${user.email}</td>
                    <td>${user.edad}</td>
                    <td>${user.pais}</td>
                    <td>${user.ciudad}</td>
                    <td>${user.domicilio}</td>
                    <td>${user.codigoPostal}</td>
                    <td>${user.contrasena}</td>
                    
                    <td>
                        <img src="${API_SERVER+user.avatar}" width="30%">
                    </td>
                    <td>
                        <button class="icono_p" onclick='updateUser(${user.id})'><i class="fa fa-pen" ></i></button></i>
                        
                        <button class="icono_p" onclick='deleteUser(${user.id})'><i class="fa fa-trash" ></button></i>
                    </td>
                  </tr>`;
      tableUsers.insertAdjacentHTML("beforeend",tr);
    });
}
  
/**
* Function que permite eliminar una pelicula del array del localstorage
* de acuedo al indice del mismo
* @param {number} id posición del array que se va a eliminar
*/
async function deleteUser(id){
    let response = await fetchData(`${API_SERVER}/api/delete_user/${id}/`, 'DELETE');
    console.log(response);
    showUsersTable();
}

/**
   * Function que permite eliminar una pelicula del array del localstorage
   * de acuedo al indice del mismo
   * @param {number} id posición del array que se va a eliminar
   
*/
  
async function updateUser(id){
    let response = await fetchData(`${API_SERVER}/api/detail_user/${id}/`, 'GET');
    const idUser = document.querySelector('#id_user');
    const nombre = document.querySelector('#nombre');
    const apellido = document.querySelector('#apellido');
    const email = document.querySelector('#email');
    const edad = document.querySelector('#edad');
    const pais = document.querySelector('#pais');
    const ciudad = document.querySelector('#ciudad');
    const domicilio = document.querySelector('#domicilio');
    const codigoPostal = document.querySelector('#codigoPostal');
    const contrasena = document.querySelector('#contrasena');
    
    idUser.value = response.id;
    nombre.value = response.nombre;
    apellido.value = response.apellido;
    email.value = response.email;
    edad.value = response.edad;
    pais.value = response.pais;
    ciudad.value = response.ciudad;
    domicilio.value = response.domicilio;
    codigoPostal.value = response.codigoPostal;
    contrasena.value = response.contrasena;
}

showUsersTable();