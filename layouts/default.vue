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

  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
