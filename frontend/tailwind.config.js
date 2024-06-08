/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'pop': ["Poppins", 'sans-serif']
      }
    },
  },
  plugins: [daisyui],
  daisyui: {
    themes: ["emerald"],
  },
};
