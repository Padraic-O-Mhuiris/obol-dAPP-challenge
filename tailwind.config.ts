import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#091011",
        secondary: "#111F22",
        tertiary: "#182D32",
        quartary: "#243D42",
        muted: "#475E64",
        light: "#D9EEF3",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;
