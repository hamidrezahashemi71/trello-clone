import type { Config } from 'tailwindcss'
const colors = require("tailwindcss/colors")

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0055D1',
        red: colors.red,
        blue: colors.blue,
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        green: colors.green,
        violet: colors.violet,
        grayborder: "#E5E5E5",
      },
      fontFamily: {
        sans: ['var(--font-sahel)']
      },
    },
  },
  plugins: [],
}
export default config
