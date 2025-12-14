/**
 * Apple Design System - Complete Tailwind CSS Configuration
 *
 * This configuration implements Apple's design tokens for web applications:
 * - Apple color palette with semantic tokens
 * - SF Pro-inspired typography scale
 * - 8-point spacing grid
 * - Apple-style border radius and shadows
 * - Custom animations and transitions
 */

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // Font Family
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'SF Pro Text',
          'SF Pro Display',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
        mono: [
          'SF Mono',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
      },

      // Typography Scale (Apple Text Styles)
      fontSize: {
        'large-title': ['34px', { lineHeight: '41px', letterSpacing: '0.011em', fontWeight: '700' }],
        'title-1': ['28px', { lineHeight: '34px', letterSpacing: '0.013em', fontWeight: '700' }],
        'title-2': ['22px', { lineHeight: '28px', letterSpacing: '0.016em', fontWeight: '700' }],
        'title-3': ['20px', { lineHeight: '25px', letterSpacing: '0.019em', fontWeight: '600' }],
        'headline': ['17px', { lineHeight: '22px', letterSpacing: '-0.024em', fontWeight: '600' }],
        'body': ['17px', { lineHeight: '22px', letterSpacing: '-0.024em', fontWeight: '400' }],
        'callout': ['16px', { lineHeight: '21px', letterSpacing: '-0.020em', fontWeight: '400' }],
        'subheadline': ['15px', { lineHeight: '20px', letterSpacing: '-0.016em', fontWeight: '400' }],
        'footnote': ['13px', { lineHeight: '18px', letterSpacing: '-0.006em', fontWeight: '400' }],
        'caption-1': ['12px', { lineHeight: '16px', letterSpacing: '0em', fontWeight: '400' }],
        'caption-2': ['11px', { lineHeight: '13px', letterSpacing: '0.006em', fontWeight: '400' }],
      },

      // Font Weights
      fontWeight: {
        regular: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
      },

      // Colors (Apple System Colors)
      colors: {
        // System Blues
        'apple-blue': {
          50: '#e6f2ff',
          100: '#cce5ff',
          200: '#99cbff',
          300: '#66b0ff',
          400: '#3396ff',
          500: '#007aff',
          600: '#0062cc',
          700: '#004999',
          800: '#003166',
          900: '#001933',
        },
        // System Greens
        'apple-green': {
          50: '#e6f9ed',
          100: '#ccf4db',
          200: '#99e9b7',
          300: '#66de93',
          400: '#4dd97f',
          500: '#34c759',
          600: '#2a9f47',
          700: '#1f7735',
          800: '#155023',
          900: '#0a2812',
        },
        // System Reds
        'apple-red': {
          50: '#ffebeb',
          100: '#ffd6d6',
          200: '#ffadad',
          300: '#ff8585',
          400: '#ff5c5c',
          500: '#ff3b30',
          600: '#cc2f26',
          700: '#99231d',
          800: '#661813',
          900: '#330c0a',
        },
        // System Oranges
        'apple-orange': {
          50: '#fff3e6',
          100: '#ffe7cc',
          200: '#ffcf99',
          300: '#ffb766',
          400: '#ffa933',
          500: '#ff9500',
          600: '#cc7700',
          700: '#995900',
          800: '#663c00',
          900: '#331e00',
        },
        // System Yellows
        'apple-yellow': {
          50: '#fffae6',
          100: '#fff5cc',
          200: '#ffeb99',
          300: '#ffe166',
          400: '#ffd633',
          500: '#ffcc00',
          600: '#cca300',
          700: '#997a00',
          800: '#665200',
          900: '#332900',
        },
        // System Grays
        'apple-gray': {
          50: '#f5f5f7',
          100: '#e8e8ed',
          200: '#d1d1d6',
          300: '#c7c7cc',
          400: '#aeaeb2',
          500: '#8e8e93',
          600: '#636366',
          700: '#48484a',
          800: '#3a3a3c',
          900: '#1c1c1e',
        },
        // Semantic Colors (CSS Variables)
        background: {
          primary: 'var(--background-primary)',
          secondary: 'var(--background-secondary)',
          tertiary: 'var(--background-tertiary)',
        },
        label: {
          primary: 'var(--label-primary)',
          secondary: 'var(--label-secondary)',
          tertiary: 'var(--label-tertiary)',
          quaternary: 'var(--label-quaternary)',
        },
      },

      // Spacing (8-point grid with custom values)
      spacing: {
        '4.5': '18px',
        '18': '72px',
        '22': '88px',
        '88': '352px',
      },

      // Border Radius (Apple-style rounding)
      borderRadius: {
        'apple-sm': '6px',
        'apple': '10px',
        'apple-lg': '14px',
        'apple-xl': '20px',
        'apple-2xl': '28px',
      },

      // Box Shadow (Subtle Apple-style shadows)
      boxShadow: {
        'apple-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'apple': '0 1px 10px 0 rgba(0, 0, 0, 0.08)',
        'apple-md': '0 4px 16px 0 rgba(0, 0, 0, 0.12)',
        'apple-lg': '0 8px 32px 0 rgba(0, 0, 0, 0.14)',
        'apple-xl': '0 12px 48px 0 rgba(0, 0, 0, 0.18)',
      },

      // Transition Duration
      transitionDuration: {
        'apple-fast': '200ms',
        'apple': '300ms',
        'apple-slow': '400ms',
      },

      // Transition Timing Function (Apple's easing curves)
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
        'apple-ease-in': 'cubic-bezier(0.42, 0, 1, 1)',
        'apple-ease-out': 'cubic-bezier(0, 0, 0.58, 1)',
        'apple-spring': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },

      // Z-Index Scale
      zIndex: {
        '1': '1',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // Max Width (Content containers)
      maxWidth: {
        'readable': '672px',
        'content': '1120px',
        'wide': '1440px',
      },

      // Backdrop Blur (Glassmorphism)
      backdropBlur: {
        'apple': '20px',
      },

      // Keyframes for custom animations
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-from-bottom': {
          '0%': { transform: 'translateY(100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-top': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(0)' },
        },
        'slide-in-from-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'slide-in-from-left': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        },
      },

      // Animation
      animation: {
        'fade-in': 'fade-in 300ms ease-out',
        'slide-in-from-bottom': 'slide-in-from-bottom 300ms ease-out',
        'slide-in-from-top': 'slide-in-from-top 300ms ease-out',
        'slide-in-from-right': 'slide-in-from-right 300ms ease-out',
        'slide-in-from-left': 'slide-in-from-left 300ms ease-out',
        'shimmer': 'shimmer 2s infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}
