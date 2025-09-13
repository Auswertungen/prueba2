// 1. Define el nombre de usuario y la clave para el localStorage
let usuario = prompt ("Por favor introduce tu usuario") ; // Reemplaza con el nombre del usuario real
const claveVisitada = `paginaVisitada_${usuario}`;

// 2. Al cargar la página, verifica si el usuario ha visitado la página
window.onload = function() {
  // Obtiene el estado del localStorage
  const yaVisito = localStorage.getItem(claveVisitada);

  // Si el usuario ya visitó la página...
  if (yaVisito) {
    // Redirige a otra página o muestra un mensaje
    console.log("Ya visitaste esta página.");
    // Por ejemplo, redirigir a otra URL:
    // window.location.href = "/otra-pagina.html";
    // O mostrar un mensaje en la página:
    document.getElementById("contenido-restricto").style.display = "none";
    document.getElementById("mensaje-ya-visto").style.display = "block";
    window.close(); 
  } else {
    // Si es la primera vez que visita, guarda el estado
    localStorage.setItem(claveVisitada, "true");
    console.log("Primera visita. Mostrando el contenido.");
    document.getElementById("contenido-restricto").style.display = "block";
    document.getElementById("mensaje-ya-visto").style.display = "none";
  }
};
