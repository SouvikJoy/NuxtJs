<template>
  <div
    id="App"
    class="default_app"
  >
    <main class="default_main">
      <div>
        <nuxt :key="$route.fullPath" />
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Default',
  components: {

  },
  mounted() {

  },
  methods: {

  }
}
</script>

<style lang="scss">

</style>
