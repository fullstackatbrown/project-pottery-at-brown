/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        chocolate: "#3F261B",
        seashell: "#FCF4ED",
        darkseashell: "#E8D9CD"
      },
      fontFamily: {
        hedvig: ["Hedvig Letters Serif", "serif"],
      },
      backgroundImage: {
        header: "url('https://i.imgur.com/42f06pa.png')",
      }
    },
  },
  plugins: [],
};
