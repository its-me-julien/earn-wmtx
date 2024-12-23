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
        'aeonik-bold': ['var(--font-aeonik-bold)'],
        'aeonik-bold-italic': ['var(--font-aeonik-bold-italic)'],
        'aeonik-light': ['var(--font-aeonik-light)'],
        'aeonik-light-italic': ['var(--font-aeonik-light-italic)'],
        'aeonik-regular': ['var(--font-aeonik-regular)'],
        'aeonik-regular-italic': ['var(--font-aeonik-regular-italic)'],
      },
    },
  },
  plugins: [require("daisyui")],
}

export default config

