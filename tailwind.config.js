module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors: {
        'brand-navy-500': '#00346b',
        'brand-navy-300': '#0153A9',
        'brand-navy-100': '#add5ff',
        'brand-blue-300': '#4fa9d6',
        'brand-blue-500': '#0484ca',
        'brand-white-100': '#ecf4f8',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
