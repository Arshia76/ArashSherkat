module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'slide-down-animation': 'slide-down 500ms ease-in-out ',
        'appear-animation': 'appear 500ms ease-in',
      },
      keyframes: {
        'slide-down': {
          '0%': {
            transform: 'translateY(-100px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        appear: {
          '0%': {
            opacity: 0,
          },
          '100%': {
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
