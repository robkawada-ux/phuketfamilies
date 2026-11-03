import type { Config } from "tailwindcss";

// Phuket Families palette (sister brand of BKK Families).
//
// The token NAMES are inherited from the bkkfamilies codebase, so every
// component still says bg-purple, text-orange and so on. Only the values
// changed, which kept the rebrand to this one file:
//   purple      deep teal  #0E7C86  (primary: header bands, buttons)
//   purple-dark dark navy  #1B2A3A  (text, footer)
//   orange      coral      #FF6B4A  (accent, hero, highlights)
//   teal        sea aqua   #3EC1D3  (unchanged)
//   green       palm green #8DC63F  (unchanged)
//   sand        #F6EFE3            (light section backgrounds)
const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: "#FF6B4A", 50: "#FFF0EC" },
        teal: { DEFAULT: "#3EC1D3", 50: "#EAFBFC" },
        green: { DEFAULT: "#8DC63F", 50: "#F3FAEA" },
        purple: { DEFAULT: "#0E7C86", dark: "#1B2A3A", 50: "#E7F4F5" },
        sand: { DEFAULT: "#F6EFE3" },
      },
      fontFamily: {
        heading: ["Georgia", "Cambria", "serif"],
        body: ["Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
