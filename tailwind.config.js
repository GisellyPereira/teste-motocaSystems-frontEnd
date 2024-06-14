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
        colors: {
          dark: "#2A233C",
          light: "#E7E3FC",
          medium: "#312D4B",
          gray:"#CAC9CD",
          blue:"#3BADFB",
          blueHover:"#3398e7",
        },
      },
    },
    plugins: [],
    darkMode: "selector",
  };
  