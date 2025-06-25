const tailwindConfig = {
  darkMode: 'class', // Enables dark mode support
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './core/**/*.{js,ts,jsx,tsx}',
    './ui/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        urbanist: ['var(--font-urbanist)', 'sans-serif'],
      },
      colors: {
        'blue-700': '#003CC5',
        'blue-500': '#29BFF4',
      },
      screens: {
        mdlg: '900px',
      },
    },
  },
  plugins: [],
};

export default tailwindConfig;
