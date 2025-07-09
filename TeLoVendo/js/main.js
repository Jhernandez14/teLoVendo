document.addEventListener("DOMContentLoaded", function () {
  const boton = document.getElementById("botonQuiero");
  const mensaje = document.getElementById("mensaje");

  boton.addEventListener("click", function () {
    mensaje.style.display = "block";
  });
});
