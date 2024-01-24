import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'shadow-0': '0px 1px 4px rgba(0, 0, 0, 0.16)'
      },
      height: {
        'header-menu': 'calc(100vh - 60px)'
      }
    },
  },
  plugins: [],
  safelist: ['hidden']
}
export default config
