import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        meQuran: ["var(--font-me-quran)", "sans-serif"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        lightGray: "var(--color-light-gray)",
        veryLightGray: "var(--color-very-light-gray)",
        lightBlue: "var(--color-light-blue)",
        white: "var(--color-white)",
      },
    },
  },
  plugins: [],
};

export default config;
