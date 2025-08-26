import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        mono: ['var(--font-fira-code)'],
      },
      colors: {
        background: '#111111',
        'main-gray': '#181818',
        'border-gray': '#262626',
        'text-light': '#f2f2f2',
        'text-dark': '#888888',
        accent: '#C778DD',
      },
    },
  },
  plugins: [],
}
export default config