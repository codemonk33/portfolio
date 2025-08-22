/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // Motion Design Tokens
      animation: {
        'fade-up': 'fadeUp 0.24s ease-out',
        'fade-in': 'fadeIn 0.18s ease-out',
        'slide-up': 'slideUp 0.18s ease-out',
        'scale-in': 'scaleIn 0.24s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.1)' },
          '100%': { boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }
        }
      },
      // Custom spacing for motion distances
      spacing: {
        'motion-xs': '4px',
        'motion-sm': '6px',
        'motion-md': '8px',
        'motion-lg': '12px',
        'motion-xl': '16px',
      },
      // Custom shadows for elevation
      boxShadow: {
        'motion-sm': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'motion-md': '0 8px 24px rgba(0, 0, 0, 0.12)',
        'motion-lg': '0 12px 32px rgba(0, 0, 0, 0.14)',
        'motion-hover': '0 8px 24px rgba(0, 0, 0, 0.16)',
      },
      // Custom colors for theme
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        accent: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        }
      },
      // Custom font sizes
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1' }],
        'display': ['2.5rem', { lineHeight: '1.2' }],
        'title': ['2rem', { lineHeight: '1.3' }],
        'subtitle': ['1.5rem', { lineHeight: '1.4' }],
      }
    },
  },
  plugins: [],
} 