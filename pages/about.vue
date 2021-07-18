<template>
  <div
    id="about"
    class="grid place-items-center h-screen"
  >
    About Us
  </div>
</template>

<script>
export default {
  name: 'About',
  /*transition: {
    name: 'slide',
    mode: 'out-in',
    css: false,

    beforeEnter (el) {
      this.$gsap.set(el, {
        scale: 1,
        opacity: 0,
        top: '-100%'
      })
    },

    enter (el, done) {
      this.$gsap.to(el, {
        opacity: 1,
        top: 0,
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done
      })
    },

    leave (el, done) {
      this.$gsap.to(el, {
        opacity: 0,
        top: '100%',
        duration: 1,
        ease: 'power2.inOut',
        onComplete: done
      })
    }
  },*/
  head () {
    return {
      title: 'About'
    }
  }
}
</script>

<style scoped>

</style>
