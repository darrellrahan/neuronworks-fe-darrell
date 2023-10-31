import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        "rotate-slow": "rotate 35s linear infinite",
        "rotate-normal": "rotate 30s linear infinite",
        "rotate-fast": "rotate 25s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
