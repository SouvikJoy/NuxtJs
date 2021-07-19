<template>
  <div id="App">
    <header>
      <TheHeader />
    </header>
    <main>
      <div>
        <Sidebar />
        <nuxt :key="$route.fullPath" />
      </div>
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
