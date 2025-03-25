/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./dist/**/*.html",
    "./*.html", // Añade esta línea si tienes HTML en raíz
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
  // ↓↓↓ Añade este bloque crítico ↓↓↓
  safelist: [
    {
      pattern: /(bg|text|border)-gray-(700|800|900)/,
      variants: ["dark", "dark:hover"],
    },
    "dark",
    "dark:hover",
  ],
  plugins: [],
};
