/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontSize: {
        '3xl': ['1.875rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
        }],
        '4xl': ['2.1rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
        }],
        '5xl': ['2.4rem', {
          lineHeight: '2.25rem',
          letterSpacing: '-0.02em',
        }],
      }
    },
  },
  plugins: [],
}
