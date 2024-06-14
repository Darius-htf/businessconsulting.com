/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      colors: {
        second: {
          DEFAULT: "#000D51",
          50: "#e4f3ff",
          100: "#cfe8ff",
          200: "#a8d2ff",
          300: "#74b3ff",
          400: "#3e80ff",
          500: "#134eff",
          600: "#0039ff",
          700: "#0039ff",
          800: "#0033e4",
          900: "#0021b0",
          950: "#000d51",
        },
        accent: {
          DEFAULT: "#2460FD",
          50: "#eef4ff",
          100: "#dae6ff",
          200: "#bdd4ff",
          300: "#8fb9ff",
          400: "#5a93ff",
          500: "#2460fd",
          600: "#1d4af3",
          700: "#1636df",
          800: "#182db5",
          900: "#1a2c8e",
          950: "#151d56",
        },
        primary: "#F7F6F6",
      },
      fontSize: {
        "4.5xl": "2.5rem",
        "clamp-title": "clamp(2rem,4vw,2.5rem)",
        "clamp-para": "clamp(1rem,4vw,1.1rem)",
      },
      backgroundImage: {
        "hero-group": "url('images/Groups/Group.png')",
      },
      scale: {
        '-100': '-1'
      },
      backgroundImage:{
        'marble2': "url('./public/images/Groups/marble 2.png')",
        'group': "url('./public/images/Groups/Group.png')",
        'blank2': "url('./public/images/project-card-image.png')",
        'abstract3': "url('./public/images/Groups/abstract.png')"
      }
    },
  },
  plugins: [],
};
