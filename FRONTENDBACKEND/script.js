const apiURL= "http://localhost:8080/ApiUsuarios/"; 

async function listarUsuarios() {
    const response = await fetch(apiURL);
    const usuarios = response.json();
    const listaUsuarios = document.querySelector("#usuarios-table tbody");

    usuarios.array.forEach(usuario => {
        const fila = document.createElement("tr");
    fila.innerHTML = `
    <td>${usuario.id}</td>
    <td>${usuario.nombre}</td>
    <td>${usuario.email}</td>
    `;
    listaUsuarios.appendChild(fila);
    });
}

async function crear_editar_Usuario(params) {
 const id = document.getElementById("usuario-id").value;   
 const name = document.getElementById("usuario-name").value;   
 const email = document.getElementById("email").value;   

 const usuario = {nombre,email};
 let method = "POST";
 let url = apiURL;

 if(id){
    method = "PUT";
    url =  `${apiURL}/${id}`;
     
 }
 const response = await fetch(url,
 {
    method,
    Headers: {'Content-type':'application/json'},
    body: JSON.stringify(usuario)
 }
);

if(response.ok){
    document.getElementById("usuario-id").value = '';
    document.getElementById("email").value = '';
    document.getElementById("nombre").value = '';
    listarUsuarios(); 
}

}


function editarUsuario(id,nombre,email){

}

async function delete_usuario(params) {
    
}

document.addEventListener("DOMContentLoaded",listarUsuarios);
