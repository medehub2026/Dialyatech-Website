/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        medical: {
          50: "#eef9fb",
          100: "#d7f0f5",
          200: "#afe0e9",
          300: "#78c9d8",
          400: "#3fb0c4",
          500: "#16a3b8",
          600: "#0d879a",
          700: "#0a6b7b",
          900: "#08394a"
        },
        navy: {
          900: "#0b1f3a",
          800: "#102f53",
          700: "#16446d"
        }
      },
      boxShadow: {
        soft: "0 18px 55px rgba(11, 31, 58, 0.10)",
        glow: "0 24px 80px rgba(22, 163, 184, 0.18)"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
