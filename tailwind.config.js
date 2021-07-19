module.exports = {
  purge: {
    content: [
      '~/pages/index.vue',
      '~/pages/about.vue',
      '~/pages/contact.vue',
      '~/pages/skills.vue',
      '~/pages/portfolio.vue',
      '~/pages/hireme.vue',
      '~/pages/*.js',
      '~/**/*.js',
      '~/**/*.js',
      '~/assets/sass/main.scss',
      '~/**/*.html',
      'index.html',
      '_nuxt/vendor/app.js'
    ],
    options: {
      safelist: ['text-center', 'p-10', 'grid'],
      blocklist: [/^debug-/]
    },
  }
}
