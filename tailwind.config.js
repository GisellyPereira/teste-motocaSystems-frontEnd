// tailwind.config.js
module.exports = {
    content: [
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/screens/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
      ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Poppins', 'sans-serif'],
        },
      },
    },
    plugins: [],
    darkMode: "selector",
  };
  