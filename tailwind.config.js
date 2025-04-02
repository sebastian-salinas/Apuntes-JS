/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./dist/**/*.html", "./*.html"],
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // ↓↓↓ Extiende las variantes para group-hover ↓↓↓
      variants: {
        extend: {
          translate: ["group-hover"],
          opacity: ["group-hover"],
        },
      },
    },
  },
  safelist: [
    {
      pattern: /(bg|text|border)-(indigo|gray)-(600|700|800|900)/,
      variants: ["dark", "hover", "group-hover"],
    },
    "group",
    "dark:hover",
  ],
  plugins: [],
};
