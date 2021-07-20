<template>
  <component
    :is="type"
    :href="href"
    :disabled="disabled"
    :class="buttonClass"
  >
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'AsyncButton',
  props: {
    /*clickAction: {
      type: Function,
      required: true
    },*/
    disabled: {
      type: Boolean,
      default: false
    },
    href: {
      type: String,
      default: null
    },
    to: {
      type: String,
      default: null
    },
    buttonClass: {
      type: String,
      default: 'button'
    }
  },
  computed: {
    type() {
      if(this.href) {
        return 'a'
      } else {
        return 'button'
      }
    }
  },
  /*methods: {
    async click() {
      await this.clickAction();
    }
  }*/
}
</script>

<style scoped>

</style>
