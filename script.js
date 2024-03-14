let menu_responsive = document.querySelector(".checkbtn");
menu_responsive.onclick = function () {
  let navBar = document.querySelector(".menu");
  navBar.classList.toggle("active");
};

// para el formulario

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");
const alertaContainer = document.getElementById("alerta-container");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;
    valido = false;
  }

  parrafo.innerHTML = valido ? "Enviado" : warnings;
  return valido;
}

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita que el formulario se envíe automáticamente
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    alertaContainer.classList.add('oculto');
    formulario.submit();
  } else {
    alertaContainer.classList.remove('oculto');
  }
});