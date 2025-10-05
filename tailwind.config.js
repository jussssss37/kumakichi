/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'kumakichi': {
          'red': '#C41E3A',
          'dark': '#1F1F1F', 
          'gold': '#D4AF37',
          'cream': '#F8F5F0',
          'brown': '#8B4513',
          'gray': {
            '100': '#F7F7F7',
            '200': '#E5E5E5',
            '300': '#D3D3D3',
            '800': '#2D2D2D',
            '900': '#1A1A1A'
          }
        }
      },
      fontFamily: {
        'japanese': ['Noto Sans JP', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
        'display': ['Shippori Mincho', 'serif'],
        'modern': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': 'linear-gradient(135deg, rgba(196, 30, 58, 0.95) 0%, rgba(31, 31, 31, 0.95) 100%)',
        'section-dark': 'linear-gradient(180deg, #1F1F1F 0%, #2D2D2D 100%)',
      },
      animation: {
        'fadeIn': 'fadeIn 1s ease-out',
        'slideUp': 'slideUp 0.8s ease-out',
        'slideInLeft': 'slideInLeft 0.8s ease-out',
        'slideInRight': 'slideInRight 0.8s ease-out',
        'scaleUp': 'scaleUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(50px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        slideInRight: {
          '0%': { transform: 'translateX(50px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' }
        },
        scaleUp: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      },
      boxShadow: {
        'elegant': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'elegant-lg': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'inset-light': 'inset 0 1px 0 rgba(255, 255, 255, 0.1)',
      }
    },
  },
  plugins: [],
}