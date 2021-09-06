<template>
  <div>
    <section>
      <div class="grid-12 trigger1">
        <h2 class="position-h2">
          The custom OLED displays on iPhone&nbsp;X deliver the most accurate color in the industry, HDR, and true blacks. And iPhone&nbsp;XMax has our largest display ever on an&nbsp;iPhone.
        </h2>
      </div>
    </section>

    <section>
      <div class="trigger2">
        <div class="iphone-image-wrapper">
          <div class="iphone1-text">
            <p>iPhone Xs Max</p>
            <p>6.5" dsiplay</p>
          </div>
          <div class="iphone-image iphone1">
            <div class="inner-phone">
              <img
                class="iphone1-img"
                src="~/assets/iphone-1.png"
                alt=""
              />
              <img
                class="iphone-stick"
                src="~/assets/iphone-3.png"
                alt=""
              />
              <img
                class="iphone1-img-behind"
                src="~/assets/iphone-left.png"
                alt=""
              />
            </div>
          </div>
          <div class="iphone-image iphone2">
            <div class="inner-phone">
              <img
                class="iphone2-img"
                src="~/assets/iphone-1.png"
                alt=""
              />
              <img
                class="iphone2-img-behind"
                src="~/assets/iphone-right.png"
                alt=""
              />
            </div>
          </div>
          <div class="iphone2-text">
            <p>iPhone Xs Max</p>
            <p>5.8" display</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Index',
  mounted() {
    this.masterAnimation()
  },
  methods: {
    intro() {
      const tlFirstScroll = this.$gsap.timeline({ paused: true });
      tlFirstScroll
        .set(".iphone-image-wrapper", { scale: 3.5, transformOrigin: 'center top', opacity: 0 } )
        .to(".iphone-image-wrapper", 3, { scale: 2.2, y: '-50%', opacity: 0.5 } )
        .to(".iphone-image-wrapper", 3, { scale: 1, y: '0%', opacity: 1 } )

      const startY = innerHeight / 10;
      const finishDistance = innerHeight / 5;

      function animateAtScrollPos() {
        tlFirstScroll.progress((scrollY - startY) / finishDistance);
      }

      document.addEventListener("scroll", animateAtScrollPos);
    },
    middle() {
      const tlSecondScroll = this.$gsap.timeline({ paused: true });

      tlSecondScroll
        .to(".iphone1", 3, { x: "-54%", scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } } )
        .to(".iphone2", 3, { x: "54%", scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } },"-=3", )
        .from('.iphone1-text', 0.3, { autoAlpha: 0, scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )
        .from('.iphone2-text', 0.3, { autoAlpha: 0, scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )
        .to('.iphone1-text', 3, { x: "-30%", scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )
        .to('.iphone2-text', 3, { x: "30%", scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )
    },
    conclusion () {
      const thirdScroll = this.$gsap.timeline ({ paused: true });
      thirdScroll

      .set('.iphone-stick', { display: "block" })

        .to('.iphone1-img-behind', 3, { x: "-50%", scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } } )
        .to('.iphone2-img-behind', 3, { x: "50%", scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } } )

        .to('.iphone1-img', 0.5, { autoAlpha: 0, scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )
        .to('.iphone2-img', 0.5, { autoAlpha: 0, scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )

        .to('.iphone1-text', 0.3, { autoAlpha: 0, scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )
        .to('.iphone2-text', 0.3, { autoAlpha: 0, scrollTrigger: { trigger: '.trigger2', pin: true, end: 'bottom', scrub: true } }, '-=3', )
    },

    masterAnimation () {
      const master = this.$gsap.timeline ();
      master
      .add(this.intro())
      .add(this.middle())
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  background: #000;
}

section {
  position: relative;
  height: 100vh;
  width: 100vw;
}

h2 {
  font-size: 50px;
  font-family: "SF Pro Display","SF Pro Icons","Helvetica Neue","Helvetica","Arial",sans-serif;
  font-weight: 500;
  color: #ffe5db;
}

.grid-12 {
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(12, 1fr);
}

.position-h2 {
  grid-row: 7;
  grid-column: 5 / span 4;
  align-self: center;
}

.iphone-image-wrapper {
  height: 100vh;
  width: 100%;
  justify-content: center;
  display: grid;
  grid-auto-columns: 2fr 1fr 2fr;
  grid-template-rows: repeat(1, 1fr);
  align-items: center;
}

.iphone-image {
  grid-row: 1;
  grid-column: 2 / span 1;
  align-self: center;
  justify-self:center;
  text-align: center;
  max-width: 100%;
}

.inner-phone {
  position: relative;
}

p {
  color: #FFF;
  font-weight: 600;
  font-size: 20px;
  margin:0 0 8px 0;
}

.iphone1-text {
  grid-column: 1;
  text-align: right;
}

.iphone2-text {
  grid-column: 3;
}

.iphone1-img {
  position: absolute;
  z-index: 2;
}

.iphone-stick {
  display: none;
  position: absolute;
  left: 54.5%;
}

.iphone2-img {
  position: absolute;
  z-index: 2;
}

.iphone1 img {
  width: 100%;
}

.iphone2 img {
  width: 88%;
}

.iphone1-img-behind {
  z-index: 1;
  position: relative;
}

.iphone2-img-behind {
  z-index: 1;
  position: relative;
}
</style>
