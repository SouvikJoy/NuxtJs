<template>
  <div id="map">
    <div class="item item1">
      item 1
    </div>
    <div class="item item2">
      item 2
    </div>
    <div class="item item3">
      item 3
    </div>
    <div class="item item4">
      item 4
    </div>
    <div class="item item5">
      item 5
    </div>
    <div class="item item6">
      item 6
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  head () {
    return {
      title: 'About'
    }
  },
  mounted() {
    let items = document.querySelectorAll(".item");
    for (let i = 0; i < items.length; i++) {
      const scene = this.$scrollmagic
        .scene({
          triggerElement: items[i],
        })
        .setPin(items[i], { pushFollowers: false })
        .addIndicators({ name: "scene" + [i] });
      this.$scrollmagic.addScene(scene);
    }
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
#map {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .item {
    height: 100vh;
    line-height: 500px;
    font-size: 50px;
    text-align: center;
    &.item1 {
      background-color: #f5a89a;
    }
    &.item2 {
      background-color: #efd591;
    }
    &.item3 {
      background-color: #c090ec;
    }
    &.item4 {
      background-color: #ecc5a9;
    }
    &.item5 {
      background-color: #8ff3f3;
    }
    &.item6 {
      background-color: #cfbe94;
    }
  }
}
</style>
