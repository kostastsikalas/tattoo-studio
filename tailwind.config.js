/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ink-black': '#0a0a0a', // Ακόμα πιο βαθύ μαύρο
        'accent-silver': '#a1a1aa', // Ένα "καθαρό" ασημί-γκρι
      },
    },
  },
  plugins: [],
}