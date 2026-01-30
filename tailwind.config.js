/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}', // Asegúrate de incluir todos tus archivos HTML y TS.
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'), // Añade el plugin aquí.
  ],
  // Configuración opcional para temas específicos:
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'dracula'], // Habilita solo los temas que vayas a usar.
    // Si usas un tema personalizado, decláralo aquí:
    /* themes: [
      {
        mytheme: {
          "primary": "#E84644",
          // ... otras variables de color
        },
      },
    ], */
  },
};
