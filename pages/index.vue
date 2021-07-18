<template>
  <div class="grid place-items-center h-screen">
    <div class="grid grid-cols-2 place-items-center w-full">
      <div>
        <div>
          Hello, I'm
        </div>
        <div class="text-6xl my-2.5 font-bold">
          Souvik Joy
        </div>
        <div class="text-2xl mb-7">
          Designer
        </div>
      </div>
      <div>
        <figure>
          <img src="https://via.placeholder.com/400x400.webp" alt="" class="rounded-full h-3/4 w-3/4">
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
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
      title: 'Home'
    }
  }
}
</script>

<style lang="scss">

</style>
