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
        "primary-1": "var(--primary-1)",
        "primary-2": "var(--primary-2)",

        "secondary-1": "var(--secondary-1)",
        "secondary-2": "var(--secondary-2)",

        "tertiary-1": "var(--tertiary-1)",
        "tertiary-2": "var(--tertiary-2)",
        "tertiary-3": "var(--tertiary-3)",

        "accent-1": "var(--accent-1)",
        "accent-2": "var(--accent-2)",
      },
    },
  },
  plugins: [],
};
export default config;
