function mostrarMensaje() {
  alert("¡Gracias por visitar Interlude Studio!");
}

// Validación básica del formulario
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Formulario enviado correctamente. ¡Nos pondremos en contacto pronto!");
    form.reset();
  });
});