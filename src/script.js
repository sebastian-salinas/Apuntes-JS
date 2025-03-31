// Inicializar Highlight.js
document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll(); // Aplica resaltado a todos los bloques de código

  // Eventos de navegación
  const sidebar = document.getElementById("sidebar");
  const sidebarOpen = document.getElementById("open-sidebar");

  sidebarOpen.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  document.querySelector(".darkModeToggle").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
});
