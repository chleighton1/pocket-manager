import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "light-cream": "#FEFCF7",
        "light-tan": "#f5f1eb",
        "dark-cyan": "#0E8784",
        "dark-grey-blue": "#333D4B",
        grey: "#83888F",
        "pale-orange": "#FDD6BA",
      },
    },
  },
  plugins: [],
};
export default config;
