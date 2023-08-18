/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      marker: ['Permanent_Marker', 'latin'],
    },
    extend: {
      backgroundImage: {
        'hero': 'linear-gradient(180deg, #FFF 0%, #1A6177 100%)',
        'house':
          'linear-gradient(180deg, #1A6177 0.11%, #263E7A 99.64%)',
          'featuresA': 'linear-gradient(180deg, #1A6177 0%, #25356A 98.75%)',
      },
    },
  },
  plugins: [],
}
