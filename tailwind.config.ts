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
        "border-comment-input": "rgba(255, 255, 255, 0.23)",
        "black-18": "#181818",
        "black-29": "#292929",
        "black-1D": "#1D1D1DCC",
        "black-1A": "#1A1A1A",
        "blacK-0C": "#0C0C0C",
        menus: "rgba(0, 0, 0, 0.50)",
        "menus-mobile": "rgba(255, 255, 255, 0.10)",
        "search-mobile": "rgba(255, 255, 255, 0.20)",
        "border-search": "rgba(107, 107, 107, 0.30)",
        "green-opaque": "#C0FFD9",
        "green-enlaces": "#4FD07E",
        "green-logout": "#133F2C",
        "navigation-bg": "rgba(255, 255, 255, 0.12)",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        aura: "url('/bgaura.png')",
        auradesktop:
          "url('https://pub-bf9da7896edf4ee98e6d6dd8e72340c7.r2.dev/images%2Fbgauradesktop.png')",
        recommended: "url('/bg-recommended.png')",
        "bg-gradient-discovery":
          "linear-gradient(to top, white, rgba(255, 255, 255, 0))",
        "bg-gradient-discovery-left":
          "linear-gradient(270deg, #0D0D0D 0%, #0D0D0D 0.01%, rgba(13, 13, 13, 0.00) 8.9%)",
        "bg-green-button":
          "linear-gradient(91deg, #BFE06C -1.08%, #4FCF76 100%)",
        "bg-trailer-button":
          "radial-gradient(45.91% 85.94% at 55.4% 14.06%, rgba(255, 255, 255, 0.40) 0%, rgba(255, 255, 255, 0.03) 100%), radial-gradient(121.48% 78.97% at 22.73% 20.31%, rgba(226, 241, 45, 0.20) 18.63%, rgba(226, 241, 45, 0.19) 100%), radial-gradient(177.49% 126.29% at 33.52% -15.63%, #E0E342 0%, rgba(35, 173, 140, 0.58) 85.15%), radial-gradient(317.72% 44.57% at 82.39% 55.47%, #41FF7B 0%, #00BCB1 100%)",
        "bg-gradient-detail-card":
          "linear-gradient(to bottom, #101010, rgba(111, 111, 111, 0.3))",
        "bg-green-opaque": "linear-gradient(91deg, #C0FFD9, #C0FFD9)        ",
      },
      boxShadow: {
        "custom-green": "0px 0px 8px 0px rgba(183, 244, 106, 0.20)",
      },
      aspectRatio: {
        tiktok: "9/16",
      },
    },
    fontFamily: {
      jakarta: ["var(--font-jakarta)"],
    },
  },
  plugins: [],
};
export default config;
