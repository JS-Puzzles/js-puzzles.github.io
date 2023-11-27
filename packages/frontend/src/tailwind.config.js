import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config}*/
const config = {
  content: [
    "src/**/*.{html,js,svelte,ts}",
    "node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],

  plugins: [flowbite],

  darkMode: "class",

  theme: {
    colors: {
      // flowbite-svelte
      primary: {
        50: "#f5f3ff",
        100: "#f3e8ff",
        200: "#e9d5ff",
        300: "#d8b4fe",
        400: "#c084fc",
        500: "#a855f7",
        600: "#9333ea",
        700: "#7e22ce",
        800: "#6b21a8",
        900: "#581c87",
        950: "#3b0764",
      },
    },
  },
};

export default config;
