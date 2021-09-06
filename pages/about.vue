<template>
  <div
    id="about"
    class="grid place-items-center h-screen back"
  >
    <div class="atom">
      <div class="orbit">
        <div class="path">
          <div class="electron"></div>
        </div>
      </div>
      <div class="orbit">
        <div class="path">
          <div class="electron"></div>
        </div>
      </div>
      <div class="orbit">
        <div class="path">
          <div class="electron"></div>
        </div>
      </div>
      <div class="orbit">
        <div class="path">
          <div class="electron"></div>
        </div>
      </div>
      <div class="nucleus"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  head() {
    return {
      title: 'About'
    }
  },
  mounted() {
    const tl = this.$gsap.timeline(),
      atom = document.querySelector(".atom"),
      dur = 2,
      del = 0.5;

    tl.fromTo('.electron', {rotationX: 90}, {
      rotationZ: -360,
      rotationX: 90,
      ease: 'none',
      duration: dur,
      stagger: {
        each: -del,
        repeat: -1
      }
    }, 0);
    tl.to('.path', {
      rotationZ: 360,
      ease: 'none',
      duration: dur,
      stagger: {
        each: -del,
        repeat: -1
      }
    }, 0);

// Add a rotation to the whole atom
    this.$gsap.set(atom, {transformOrigin: "center center"});
    this.$gsap.to(atom, {rotation: 360, ease: "none", repeat: -1, duration: 300})

// Skip the loading
    tl.progress(0.9999);

    const timeScaleTween = this.$gsap.to(tl, {
      duration: 0.75,
      timeScale: 0.1,
      paused: true
    });

// Slow the animation on mouse enter
    atom.addEventListener("mouseenter", function() {
      timeScaleTween.play();
    });
// Set the animation back to normal on mouse leave
    atom.addEventListener("mouseleave", function() {
      timeScaleTween.reverse();
    });
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Signika+Negative:300,400&display=swap');
body {
  font-family: "Signika Negative", sans-serif;
  font-weight: 300;
  background: grey;
  overflow: hidden;
  color: white;
  text-align: center;
}

.atom {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 300px;
  height: 300px;
  perspective: 1000;
  margin-left: -170px;
  margin-top: -146px;
  transform-style: preserve-3d;
}

.nucleus {
  position: absolute;
  top: 50%;
  left: 50%;
  margin: -10px 0 0 -10px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #272727;
}

.orbit {
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  border-radius: 300px;
  border: 5px solid #ccc;
  transform-style: preserve-3d;
  transform: rotateX(80deg) rotateY(20deg);
}

.orbit:nth-child(2) {
  transform: rotateX(80deg) rotateY(70deg);
}
.orbit:nth-child(3) {
  transform: rotateX(80deg) rotateY(-20deg);
}
.orbit:nth-child(4) {
  transform: rotateX(80deg) rotateY(-50deg);
}

.path {
  width: 300px;
  height: 300px;
  position: relative;
  transform-style: preserve-3d;
}

.electron {
  position: absolute;
  top: -5px;
  left: 50%;
  margin-left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #ccc;
}
</style>
