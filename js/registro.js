const nombres = document.getElementById("nombres");
const errorNombres = document.getElementById("errornombres");

const email = document.getElementById("email");
const errorEmail = document.getElementById("errorEmail");

const contrasena = document.getElementById("contrasena");
const errorContrasena = document.getElementById("errorContrasena");

const confirmacion = document.getElementById("confirmacion");
const errorConfirmacion = document.getElementById("errorConfirmacion");

const tipo = document.getElementById("tipo");
const errorTipo = document.getElementById("errorTipo");

const acepto = document.getElementById("acepto");
const errorAcepto = document.getElementById("errorAcepto");

const continuar = document.getElementById("continuar");

continuar.addEventListener("click", e => {
  e.preventDefault();

  validarNombre(nombres);
  validarEmail(email);
  validarTipo(tipo);
  validarContrasena(contrasena.value.length);
  validarConfirmacionContrasena(confirmacion, contrasena);
  validarAcepto(acepto);
});

//Funciones para validar formulario de registro
function validarNombre(valor) {
  if (valor.value !== "" && valor.value.length) {
    errorNombres.textContent = "";
  } else {
    errorNombres.textContent =
      "Este campo es obligatorio";
  }
}

function validarEmail(valor) {
  if (/\S+@\S+\.\S+/.test(valor.value)) {
    errorEmail.textContent = "";
  } else {
    errorEmail.textContent = "Formato de correo invalido";
  }
}

function validarContrasena(valor) {
  if (valor >= 8) {
    errorContrasena.textContent = "";
  } else {
    errorContrasena.textContent = "Debe contener al menos 8 caracteres";
  }
}

function validarConfirmacionContrasena(valor, value2) {
  if (valor.value === value2.value) {
    errorConfirmacion.textContent = "";
  } else {
    errorConfirmacion.textContent = "La contraseña no coincide";
  }
}

function validarTipo(valor) {
  if (valor.options[valor.selectedIndex].text !== "Seleccione...") {
    errorTipo.textContent = "";
  } else {
    errorTipo.textContent = "Selecciones una opción";
  }
}

function validarAcepto(valor) {
  if (valor.checked) {
    errorAcepto.textContent = "";
  } else {
    errorAcepto.textContent = "Debe aceptar las condiciones";
  }
}