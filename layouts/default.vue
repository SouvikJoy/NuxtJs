<template>
  <div id="App">
    <header>
      <TheHeader id="Nav" />
    </header>
    <main>
      <Sidebar />
      <nuxt :key="$route.fullPath" />
    </main>
    <footer class="footer grid place-items-center bg-secondary text-white">
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'
import Sidebar from '~/components/common/Sidebar'
export default {
  name: 'Default',
  components: {
    Sidebar,
    TheFooter,
    TheHeader
  },
  mounted() {
    this.animateOnScroll()
  },

  methods: {
    animateOnScroll() {
      this.$gsap.to(window, { duration: 2, scrollTo: 1000 })

      this.$gsap.to('.box', {
        x: 500,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.content',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      })
    }
  }
}
</script>

<style lang="scss">

</style>
