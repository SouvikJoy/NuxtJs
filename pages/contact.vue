<template>
  <div class="grid place-items-center h-screen">
    Contact Us
  </div>
</template>

<script>
export default {
  name: 'Contact',
  transition: {
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
  },
  head () {
    return {
      title: 'Contact'
    }
  }
}
</script>

<style scoped>

</style>
