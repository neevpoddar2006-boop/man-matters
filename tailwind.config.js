/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#191512',
          50: '#f6f4f2',
          100: '#e9e4df',
          200: '#cfc4ba',
          300: '#a99787',
          400: '#7d685a',
          500: '#5a483d',
          600: '#443630',
          700: '#332924',
          800: '#241c19',
          900: '#191512',
          950: '#0f0c0a',
        },
        tea: {
          brown: '#6b3d2e',
          brownDark: '#4a2a20',
          green: '#3f5b3f',
          greenDark: '#2c4230',
          greenLight: '#7c9b6f',
        },
        cream: {
          DEFAULT: '#f7f2ea',
          50: '#fdfbf8',
          100: '#f7f2ea',
          200: '#efe6d6',
          300: '#e3d4bb',
          400: '#c9b89f',
          500: '#a8987f',
          600: '#8a7a63',
        },
        brass: {
          DEFAULT: '#a8813f',
          light: '#c9a869',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        steam: {
          '0%, 100%': { transform: 'translateY(0) scaleX(1)', opacity: '0.5' },
          '50%': { transform: 'translateY(-10px) scaleX(1.08)', opacity: '0.9' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        fadeIn: 'fadeIn 1s ease forwards',
        steam: 'steam 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
