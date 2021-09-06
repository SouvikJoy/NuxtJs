<template>
  <div>
    <div class="grid place-items-center min-h-100vh">
      <h2>Scroll down</h2>
    </div>
    <div class="grid place-items-center min-h-100vh">
      <h1>My progress is attached to the scroll event!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  head () {
    return {
      title: 'Contact'
    }
  },
  mounted() {
    const tl = this.$gsap.timeline({paused: true});
    tl.from("h1", {scale: 4, autoAlpha: 0});


    const startY = innerHeight / 10;
    const finishDistance = innerHeight / 5;
    function animateAtScrollPos() {
      tl.progress((scrollY - startY) / finishDistance);
    }
    document.addEventListener("scroll", animateAtScrollPos);
  }
}
</script>

<style scoped>
.contact {
  display: grid;
  place-items: center;
  min-height: 100vh;
}
h1 {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
