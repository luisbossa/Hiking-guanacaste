// Obtener elementos del DOM
const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("close-menu");

// Abrir el sidebar al hacer clic en el botón de hamburguesa
hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.add("open");
});

// Cerrar el sidebar al hacer clic en el botón de cierre
closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
