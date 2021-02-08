import redirectRoutes from './config/redirect-routes';
import shrinkRay from 'shrink-ray-current';
import strapi from './config/strapi';
import markdownit from './config/markdownit';
export default {
  mode: 'universal',
    telemetry: false,
    target: 'server',
    server: {
        port: 3000, // default: 3000
        host: '0.0.0.0' // default: localhost
    },
  buildModules: [
    "@nuxtjs/color-mode",
    "@nuxtjs/tailwindcss",
    'nuxt-purgecss',
    "@nuxtjs/google-fonts"
  ],
  build:{
    postcss: {
      plugins: {
        'postcss-import':true,
        'postcss-nested': {}
      },
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    preset: {
      stage: 1 // see https://tailwindcss.com/docs/using-with-preprocessors#future-css-featuress
    },
    optimization: {
      splitChunks: {
        cacheGroups: {
          tailwindConfig: {
              test: /tailwind\.config/,
              chunks: 'all',
              priority: 10,
              name: true
            }
          }
        }
      }
  },
    modules: [
        //'@nuxt/http',
      //'@nuxtjs/axios',
        //'@nuxtjs/auth',
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
    ['@nuxtjs/redirect-module', redirectRoutes],
    "@nuxtjs/gtm",
    "@nuxtjs/markdownit", 
    "@nuxtjs/strapi"
  ],
  css: ['@/assets/scss/styles/main.scss'],
  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID 
  },
  strapi:strapi,
  markdownit:markdownit,
  render: {
    static: {
      setHeaders(res) {
          res.setHeader('X-Frame-Options', 'ALLOWALL')
          res.setHeader('Access-Control-Allow-Origin', '*')
          res.setHeader('Access-Control-Allow-Methods', 'GET')
          res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      }
  },
   
  },
  // tailwindcss: {
  //   // add '~tailwind.config` alias
  //   exposeConfig: true
  // },
  purgeCSS: {
    whitelist: ["dark-mode"]
  },
  plugins: [
    { src: '~plugins/ga.js', mode: 'client' }
  ],
};
