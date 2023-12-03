/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: "20px",
        xl: "36px",
      },
      center: true,
    },

    fontSize: {
      sm: ['14px', '18px'],
      base: ['16px', '22px'],
      lg: ['17px', '24px'],
      xl: ['20px', '30px'],
      '2xl': ['48px', '48px'],
      '3xl': ['64px', '64px'],
    },

    colors: {
      lightBrandPrimary:'#b6e6ff',
      transparent: 'transparent',
      textPrimary:'#0A335C',
      textSecondary:'#174258CC',
      brandPrimary: '#00ACFF',
      otherRed: '#FF3B30',
      otherBlack: '#000000',
      otherLightYellow: '#FFEB99',
      otherYellow: '#FFCC00',
      bgSecondary: '#EEF4F6',
      borderPrimary: '#1742581A',
    },

    extend: {
      fontFamily: {
        Manrope: 'Manrope, ui-serif',
      }
    },
  },
  plugins: [],
}

