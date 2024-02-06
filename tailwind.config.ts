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
        "dark-aura": "#171717",
        "brown-aura": "rgba(39, 39, 39, 0.70)",
        inputs: "#1C1C1C",
        "yellow-aura-opaque": "#FFE086",
        "yellow-aura-accent": "#FBBC05",
        "brown-text": "#272727",
        "blue-facebook": "#1877F2",
        "border-container": "rgba(255, 255, 255, 0.10)",
        "border-otp": "rgba(255, 255, 255, 0.13)",
        otpback: "#1C1C1C",
        "black-3A": "#3A3A3A",
        "black-0D": "#0D0D0D",
        "footer-dash": "rgba(38, 38, 38, 0.70)",
        "footer-dash-border": "rgba(255, 255, 255, 0.10)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        aura: "url('/bgaura.png')",
        auradesktop: "url('/bgauradesktop.png')",
        "bg-gradient-discover":
          "linear-gradient(to top, white, rgba(255, 255, 255, 0))",
      },
    },
  },
  plugins: [],
};
export default config;
