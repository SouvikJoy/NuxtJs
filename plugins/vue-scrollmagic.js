import Vue from 'vue'
import VueScrollmagic from 'vue-scrollmagic'

Vue.use(VueScrollmagic, {
  vertical: true,
  globalSceneOptions: {
    triggerHook: "onLeave",
    duration: "200%"
  },
  loglevel: 2,
  refreshInterval: 100,
});
