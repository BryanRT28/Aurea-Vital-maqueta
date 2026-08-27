/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./admin/**/*.html"], 
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "oro-rosa": "#DB8780",
        "dorado": "#D4AF87",
        "gris-principal": "#666769",
        "gris-claro": "#D9D9D9",
        "verde-jade": "#3F7D73",
        "azul-pizarra": "#004E7A",
        
        "primary": "#DB8780",
        "secondary": "#3F7D73",
        "tertiary": "#004E7A",
        "background": "#F7F7F7",
        "surface": "#FFFFFF",
        "surface-container": "#D9D9D9",
        "on-surface": "#2A2A2A",
        "on-surface-variant": "#666769"
      },
      borderRadius: {
        "DEFAULT": "0.5rem",
        "lg": "1rem",
        "xl": "1.5rem",
        "full": "9999px"
      },
      fontFamily: {
        "body": ["Source Sans 3", "sans-serif"],
        "headline": ["Montserrat", "sans-serif"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries'),
  ],
}