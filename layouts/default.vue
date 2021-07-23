<template>
  <div
    id="App"
    class="default_app"
  >
    <header class="default_header">
      <TheHeader />
    </header>
    <main class="default_main">
      <div>
        <nuxt :key="$route.fullPath" />
      </div>
    </main>
    <footer class="default_footer">
      <TheFooter />
    </footer>
  </div>
</template>

<script>
import TheHeader from '~/components/common/TheHeader'
import TheFooter from '~/components/common/TheFooter'
export default {
  name: 'Default',
  components: {
    TheFooter,
    TheHeader
  },
  mounted() {
    this.animateOnScroll()
  },
  methods: {
    animateOnScroll () {
      const scene1 = this.$scrollmagic.scene({
        triggerElement: '.default_main',
        triggerHook: 0,
        duration: "100%"
      })
        .setTween('.default_header', {
          backgroundColor: 'hsla(211, 29%, 24%, 1.0)',
          position: 'fixed'
        })
      .addIndicators()
      this.$scrollmagic.addScene(scene1)
    }
  }
}
</script>

<style lang="scss">

</style>
