
const tablaLeads = document.getElementById("tabla");
const campoFiltro = document.getElementById("filtro");

const leads = [
  {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    programa: ""
  },
  {
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    programa: "I"
  },

];

generarTablaLeads(leads);

campoFiltro.addEventListener("input", filtrarLeads);

function generarTablaLeads(leads) {

  tablaLeads.innerHTML = "";

  leads.forEach((lead) => {
    const fila = document.createElement("tr");

    const celdaNombre = document.createElement("td");
    celdaNombre.textContent = lead.nombre;
    fila.appendChild(celdaNombre);

    const celdaApellido = document.createElement("td");
    celdaApellido.textContent = lead.apellido;
    fila.appendChild(celdaApellido);

    const celdaEmail = document.createElement("td");
    celdaEmail.textContent = lead.email;
    fila.appendChild(celdaEmail);

    const celdaTelefono = document.createElement("td");
    celdaTelefono.textContent = lead.telefono;
    fila.appendChild(celdaTelefono);

    const celdaPrograma = document.createElement("td");
    celdaPrograma.textContent = lead.programa;
    fila.appendChild(celdaPrograma);


    tablaLeads.appendChild(fila);
  });
}


function filtrarLeads() {
  const filtro = campoFiltro.value.toLowerCase();
  const filas = tablaLeads.getElementsByTagName("tr");

  for (let i = 1; i < filas.length; i++) {
    const fila = filas[i];
    const nombre = fila.getElementsByTagName("td")[0].textContent.toLowerCase();
    if (nombre.includes(filtro)) {
      fila.style.display = "";
    } else {
      fila.style.display = "none";
    }
  }
}
