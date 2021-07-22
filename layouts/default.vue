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
    <footer class="bg-secondary">
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
  mounted () {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches)
      document.documentElement.classList.add('dark')
    else
      document.documentElement.classList.add('light')
  }
}
</script>

<style lang="scss">

</style>
