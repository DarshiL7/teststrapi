/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
import tailwindOverride from './config/tailwind/override'
module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  experimental: {
    darkModeVariant: true
  },
  dark: 'class',
  purge: [],
  darkMode: true,
  theme: {
    darkSelector: ".dark-mode",
    fontFamily: {
      ptbold: ['poppinsbold', 'sans-serif'],
      ptreg: ['poppinsregular', 'sans-serif'],
      ptsemi: ['poppinssemibold', 'sans-serif'],
      ptexbold: ['poppinsextrabold', 'sans-serif'],
      ptemed: ['poppinsmedium', 'sans-serif']
    },
    container: {
      screens: {
        xl: '1492px'
      }
    },
    extend: {
      colors: {
        primary: '#ff533d',
        secondary: '#0f1628',
        powderblue: '#B6D9D5',
        gray: '#2b2b2b',
        lightgray: '#ededed',
        cultured: '#F5F55',
        black: {
          0: '#000000',
        },
        orange: {
          50: '#ff533d',
        },
        grey: {
          20: '#f4d5d1',
          50: '#f5f5f5',
          800: '#1F2937',
          900: '#1F2937'
        },
        offwhite: {
          100: '#e9f4f2'
        }
      },
      borderColor: {
        orange: {
          50: '#ff533d',
        },
      },
      inset: {
        100: '100%'
      },
      fontSize: {
        '6xl': '3.375rem',
      },
    }
  }
}
