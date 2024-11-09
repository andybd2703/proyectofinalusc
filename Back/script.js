let eventos = [];

function obtenerEventos() {
  const eventosStorage = localStorage.getItem("eventos");
  if (eventosStorage) {
    eventos = JSON.parse(eventosStorage);
  }
}

function guardarEventos() {
  localStorage.setItem("eventos", JSON.stringify(eventos));
}

function generarTablaEventos() {
  const tableBody = document.querySelector("#eventos-table tbody");
  tableBody.innerHTML = ""; 

  eventos.forEach((evento, index) => {
    const row = tableBody.insertRow();

    const idCell = row.insertCell();

    const nombreCell = row.insertCell();

    const codigoCell = row.insertCell();

    const responsableCell = row.insertCell();

    const accionesCell = row.insertCell();

    idCell.textContent = evento.id;
    nombreCell.textContent = evento.nombreEvento;

    codigoCell.textContent = evento.codigoEvento;

    responsableCell.textContent = evento.responsable;

    const editButton = document.createElement("button");

    editButton.textContent = "Editar";

    editButton.addEventListener("click", () => editarEvento(index));

    const deleteButton = document.createElement("button");

    deleteButton.textContent = "Eliminar";

    deleteButton.addEventListener("click", () => eliminarEvento(index));

    accionesCell.appendChild(editButton);

    accionesCell.appendChild(deleteButton);
  });
}

function crearOActualizarEvento() {
  const id = document.getElementById("evento-id").value;

  const nombreEvento = document.getElementById("nombreEvento").value;
  
  const codigoEvento = document.getElementById("codigoEvento").value;

  const responsable = document.getElementById("responsable").value;

  const evento = { 
    id: id ? id : Date.now().toString(), 

    nombreEvento: nombreEvento, 

    codigoEvento: codigoEvento, 

    responsable: responsable
  };

  if (id) {
    eventos[eventos.findIndex(e => e.id === id)] = evento;
  } else {
    eventos.push(evento);
  }

  guardarEventos();

  generarTablaEventos();

  limpiarFormulario();
}

function editarEvento(index) {
  const evento = eventos[index];

  document.getElementById("evento-id").value = evento.id;

  document.getElementById("nombreEvento").value = evento.nombreEvento;

  document.getElementById("codigoEvento").value = evento.codigoEvento;

  document.getElementById("responsable").value = evento.responsable;
}

function eliminarEvento(index) {

  eventos.splice(index, 1);

  guardarEventos();

  generarTablaEventos();
}

function limpiarFormulario() {
  document.getElementById("evento-id").value = "";

  document.getElementById("nombreEvento").value = "";

  document.getElementById("codigoEvento").value = "";
  
  document.getElementById("responsable").value = "";
}

obtenerEventos();
generarTablaEventos();