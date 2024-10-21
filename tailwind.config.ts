import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        customPink: "#FE346E", // Add your custom color here
        primary:"#0F2533",
        secondary:"#0A1723",
        secondary2:"#0D1F2C",
        secondary3:"#0A1723",
        lightGray:"#C1C1C2",


      },
      screens: {
        'xs': '480px', // This is the custom breakpoint for extra small screens
      },
    },
  },
  plugins: [],
};

export default config;
