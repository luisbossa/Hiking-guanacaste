const hamburgerMenu = document.getElementById("hamburger-menu");
const sidebar = document.getElementById("sidebar");
const closeMenu = document.getElementById("close-menu");

hamburgerMenu.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeMenu.addEventListener("click", () => {
  sidebar.classList.remove("open");
});
