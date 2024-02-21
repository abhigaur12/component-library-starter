import { tailwindPreset } from './src/tailwind-presets';

/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [tailwindPreset],
  prefix: '',
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  plugins: [],
};
