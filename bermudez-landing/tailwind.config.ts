import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        surface: {
          DEFAULT: '#111317',
          dim: '#111317',
          'container-lowest': '#0c0e11',
          'container-low': '#1a1c1f',
          'container': '#1e2024',
          'container-high': '#282a2e',
          'container-highest': '#333538',
        },
        primary: {
          DEFAULT: '#e9c176',
          container: '#c5a059',
        },
        secondary: {
          DEFAULT: '#bfc7d7',
        },
        'on-surface': '#e2e2e6',
        'on-primary': '#111317',
        'outline-variant': '#4e4639',
      },
      fontFamily: {
        display: ['var(--font-space-grotesk)', 'sans-serif'],
        body: ['var(--font-manrope)', 'sans-serif'],
      },
      spacing: {
        '8': '2.75rem',
      },
      backdropBlur: {
        'glass': '40px',
      },
      backgroundImage: {
        'gradient-gold': 'linear-gradient(135deg, #e9c176 0%, #c5a059 100%)',
      },
    },
  },
  plugins: [],
}

export default config
