// Inicializar Highlight.js
document.addEventListener("DOMContentLoaded", function () {
  hljs.highlightAll(); // Aplica resaltado a todos los bloques de código

  // Eventos de navegación
  const sidebar = document.getElementById("sidebar");
  const sidebarOpen = document.getElementById("open-sidebar");

  sidebarOpen.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });

  document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
  });
});

const temario = {
  name: "Introducción",
  link: "/src/01-index.html",
  name: "Variables",
  link: "/src/02-variables.html",
  name: "Strings",
  link: "/src/03-strings.html",
  name: "Numbers",
  link: "/src/04-numbers.html",
  name: "Operadores",
  link: "/src/05-operators.html",
  name: "Booleans",
  link: "/src/06-booleans.html",
  name: "Objetos",
  link: "/src/07-objects.html",
  name: "Arrays",
  link: "/src/08-arrays.html",
  name: "Arrays Methods",
  link: "/src/09-arrays-methods.html",
  name: "Estructuras de control",
  link: "/src/10-structures.html",
  name: "Iteradores",
  link: "/src/11-iterators.html",
  name: "Funciones",
  link: "/src/12-functions.html",
  name: "DOM",
  link: "/src/13-dom.html",
  name: "Eventos",
  link: "/src/14-events.html",
};

const inputSearch = document.getElementById("search");

inputSearch.addEventListener("change", () => {
  console.log(inputSearch.value);
});
