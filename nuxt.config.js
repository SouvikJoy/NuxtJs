export default {
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    titleTemplate: '%s - NuxtJs',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  vue: {
    config: {
      productionTip: false,
      devtools: true
    }
  },
  loading: {
    color: 'blue',
    height: '5px'
  },
  css: [
    '~assets/sass/main.scss'
  ],
  plugins: [{
    src: '~/plugins/vue-scrollmagic.js',
    ssr: false
  }],
  components: false,
  buildModules: [
    '@nuxtjs/eslint-module',
    'nuxt-windicss',
    '@aceforth/nuxt-optimized-images',
  ],
  windicss: {
    scan: {
      dirs: ['./'],
      exclude: [
        'node_modules',
        'dist',
        '.git',
        '.github',
        '.nuxt',
        'coverage',
        '**/__snapshots__',
        '*.test.js',
      ],
    },
    preflight: {
      alias: {
        'nuxt-link': 'a',
        'nuxt-img': 'img',
      },
    },
  },
  optimizedImages: {
    optimizeImages: true
  },
  modules: [
    '@nuxtjs/axios',
    'nuxt-gsap-module',
    '@nuxtjs/pwa',
  ],
  gsap: {
    extraPlugins: {
      cssRule: true,
      draggable: true,
      easel: true,
      motionPath: true,
      pixi: true,
      text: true,
      scrollTo: true,
      scrollTrigger: true,
    },
    extraEases: {
      expoScaleEase: true,
      roughEase: true,
      slowMo: true,
    }
  },
  router: {
    linkExactActiveClass: 'portfolio_nuxt_link_exact_active',
  },
  axios: {

  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
  }
}
