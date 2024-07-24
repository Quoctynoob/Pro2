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
        'darkMint': '#07271a',
        'mintCream': '#e1f4ed',
        'primary': '#efd00b',
        'secondary': '#d5803f',
        'accent': '#9cd043',
        'boxDark': '#162717',
        'boxLight': '#E2F2E2',

        'modpurple': '#95ADE5',
        
      },
    },
  },
  plugins: [],
};
export default config;
