/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
        "ghColor": {
          100: "#cc0000",
          200: "#ffff00",
          300: "#008000",
        }
       
      }
    },
    letterSpacing: {
      normal: "0.25rem",
    }

  }
}

