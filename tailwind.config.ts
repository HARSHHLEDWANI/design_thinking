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
        'scheme-bg': 'var(--scheme-bg)',
        'black-ink': '#0a0a0a',
        'cinnabar': '#e8464e',
        'fall-green': '#dae8b6',
        'blue-chalk': '#dcd5ea',
        'misty-rose': '#ffd3f1',
      },
      fontFamily: {
        sans: ['DM Sans', 'Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
