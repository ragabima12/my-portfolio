/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#3a86ff',
        secondary: '#ff006e',
        dark: '#14213d',
        light: '#f8f9fa',
        accent: '#fb5607',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            a: {
              color: '#3a86ff',
              '&:hover': {
                color: '#1a56ff',
              },
            },
          },
        },
        dark: {
          css: {
            color: '#f8f9fa',
            a: {
              color: '#3a86ff',
              '&:hover': {
                color: '#1a56ff',
              },
            },
            h1: {
              color: '#f8f9fa',
            },
            h2: {
              color: '#f8f9fa',
            },
            h3: {
              color: '#f8f9fa',
            },
            h4: {
              color: '#f8f9fa',
            },
            strong: {
              color: '#f8f9fa',
            },
            code: {
              color: '#f8f9fa',
            },
            blockquote: {
              color: '#d1d5db',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
