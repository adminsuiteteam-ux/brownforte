/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0A1628',
          800: '#0f2040',
          700: '#1a2f55',
          600: '#1E3A5F',
        },
        steel: {
          DEFAULT: '#1E3A5F',
          600: '#2a4f7e',
          400: '#4a7aaa',
          200: '#93b8d4',
        },
        amber: {
          DEFAULT: '#F59E0B',
          400: '#FBBF24',
          600: '#D97706',
          700: '#B45309',
        },
        slate: {
          light: '#E2E8F0',
          mid: '#94A3B8',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-navy': 'linear-gradient(135deg, #0A1628 0%, #1E3A5F 100%)',
        'gradient-amber': 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0A1628 0%, #1a2f55 50%, #0f2040 100%)',
        'dot-grid': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'dot': '28px 28px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.8s ease-out',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      boxShadow: {
        'glow-amber': '0 0 30px rgba(245, 158, 11, 0.3)',
        'glow-blue': '0 0 30px rgba(30, 58, 95, 0.5)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 20px 60px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
}
