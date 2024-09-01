/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#F6643C',
      secondary: '#FDD7CD',
      secondaryHover: '#c2410c',
      danger: '#dc2626',
      dangerHover: '#991b1b',
      white: '#f3f4f6',
      pure: '#ffffff',
      button: '#f3f4f6',
      buttonHover: '#d1d5db',
      black: '#111827',
    },
    opacity: {
      20: '0',
    },
    extend: {
      spacing: {
        body: '2.5rem',
      },
    },
  },
  plugins: [],
}
