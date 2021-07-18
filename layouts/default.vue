<template>
  <div id="App">
    <header>
      <TheHeader id="Nav" />
    </header>
    <main>
      <nuxt :key="$route.fullPath" />
    </main>
    <footer class="grid place-items-center h-10vh bg-secondary text-white">
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
  }
}
</script>

<style lang="scss">

</style>
