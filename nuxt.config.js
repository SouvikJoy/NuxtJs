export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
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
  loading: { color: 'hsla(211, 28%, 29%, 1)' },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/sass/main.scss'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: false,
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    'nuxt-purgecss'
  ],
  purgeCSS: {
    extractors: () => [
      {
        extractor(content) {
          return content.match(/[A-z0-9-:\\/]+/g)
        },
        extensions: ['html', 'vue', 'js']
      },
      {
        extractor(content) {
          return content.match(/[A-z0-9-\\/]+/g)
        },
        extensions: ['vue'] // This will not work, because the above extractor is applied to 'vue' already.
      }
    ]
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    'nuxt-gsap-module',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa'
  ],
  gsap: {
    scrollTrigger: true,
    scrollTo: true
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
