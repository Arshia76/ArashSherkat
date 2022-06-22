module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'auth-hero': "url('https://wallpaperaccess.com/full/499250.jpg')",
      }),
      animation: {
        'slide-down-animation': 'slide-down 500ms ease-in-out ',
        'move-left-animation': 'move-left 500ms normal ease-in-out 1 forwards',
        'move-right-animation':
          'move-right 500ms normal ease-in-out 1 forwards',
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
        'move-left': {
          '0%': {
            opacity: 0,
            transform: 'translateX(200px)',
          },
          '100%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
        },
        'move-right': {
          '0%': {
            opacity: 1,
            transform: 'translateX(0)',
          },
          '100%': {
            opacity: 0,
            transform: 'translateX(200px)',
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
