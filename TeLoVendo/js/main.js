document.addEventListener("DOMContentLoaded", function () {
  // Botón "¡Lo quiero!" en ficha.html
  const boton = document.getElementById("botonQuiero");
  const mensaje = document.getElementById("mensaje");

  if (boton && mensaje) {
    boton.addEventListener("click", function () {
      mensaje.style.display = "block";
    });
  }

  // Formulario de contacto
  const formulario = document.getElementById("formularioContacto");
  const mensajeEnviado = document.getElementById("mensajeEnviado");

  if (formulario && mensajeEnviado) {
    formulario.addEventListener("submit", function (e) {
      e.preventDefault();
      mensajeEnviado.style.display = "block";
      formulario.reset();
    });
  }
});
