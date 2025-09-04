import type { Config } from 'tailwindcss';
const { fontFamily } = require('tailwindcss/defaultTheme');

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-light': 'rgb(var(--color-text-light) / <alpha-value>)',
        'text-dark': 'rgb(var(--color-text-dark) / <alpha-value>)',
        'accent': 'rgb(var(--color-accent) / <alpha-value>)',
        'accent2': 'rgb(var(--color-accent-2) / <alpha-value>)',
        'accent3': 'rgb(var(--color-accent-3) / <alpha-value>)',
        'accent4': 'rgb(var(--color-accent-4) / <alpha-value>)',
        'background': 'rgb(var(--color-background) / <alpha-value>)',
        'main-gray': 'rgb(var(--color-main-gray) / <alpha-value>)',
        'border-gray': 'rgb(var(--color-border-gray) / <alpha-value>)',
      },
      fontFamily: {
        source: ['var(--font-source-code-pro)', ...fontFamily.mono],
      },
    },
  },
  plugins: [],
};
export default config;