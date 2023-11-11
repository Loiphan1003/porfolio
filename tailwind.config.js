/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': '700px',
      'lg': '1060px',
    },
    extend: {
      colors: {
        dark: {
          bg: '#181818',
          text: '#F9F9F9',
          fontColorHeading: '#ffffff',
          fontColorBase: '#e6e6e6',
          fontColorMuted: '#999999',
          navColor: '#bbbbbb',
          cardBackgroundColor: '#1f1f1f',
          buttonBackgroundColor: '#252525',
          borderColor: '#2c2c2c',
          marker: '#e77cc7'
        },
        light: {
          bg: '#eeeeee',
          fontColorHeading: '#252525',
          fontColorBase: '#2c2c2c',
          fontColorMuted: '#666666',
          navColor: '#252525',
          cardBackgroundColor: '#f9f9f9',
          buttonBackgroundColor: '#f6f6f6',
          borderColor: '#dddddd'
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'typing': 'typing 1.5s steps(30) forwards',
      },
      keyframes: {
        typing: {
          to: {
            left: '100%',
          }
        },
      },
    },
  },
  plugins: [],
}
