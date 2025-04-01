// Inicializar Highlight.js
document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll(); // Aplica resaltado a todos los bloques de código

  // Eventos de navegación
  const sidebar = document.getElementById("sidebar");
  const sidebarOpen = document.getElementById("open-sidebar");

  sidebarOpen.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  // Obtener el botón de dark mode
  const darkModeToggle = document.querySelector(".darkModeToggle");

  // Función para aplicar el estado del dark mode
  function applyDarkModeState() {
    const isDarkMode = localStorage.getItem("darkMode") === "true";
    document.documentElement.classList.toggle("dark", isDarkMode);
  }

  // Aplicar el estado almacenado al cargar la página
  applyDarkModeState();

  // Manejar el clic en el botón de dark mode
  darkModeToggle.addEventListener("click", () => {
    const isDarkMode = document.documentElement.classList.toggle("dark");
    localStorage.setItem("darkMode", isDarkMode);
  });
});
