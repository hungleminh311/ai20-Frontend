
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: colors.blue,
      secondary: "#ff80b520",
    },
    extend: {
      boxShadow: {
        "neo-brutal": "-3px 3px 0px 0px rgba(17, 24, 39, 1)",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
export default config;

