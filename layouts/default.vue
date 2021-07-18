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
  }
}
</script>

<style lang="scss">

</style>
