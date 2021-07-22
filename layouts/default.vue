<template>
  <div
    id="App"
    class="default_app"
  >
    <header class="bg-transparent w-screen fixed">
      <TheHeader />
    </header>
    <main>
      <div>
        <nuxt :key="$route.fullPath" />
      </div>
    </main>
    <footer class="bg-secondary">
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
}
</script>

<style lang="scss">

</style>
