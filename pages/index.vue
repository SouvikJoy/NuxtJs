<template>
  <div id="landing_page">
    <div class="page page-1 home grid grid-cols-2 place-items-center">
      <div>
        <div class="mb-6">
          <span
            id="hello"
            class="bubble"
          >
            <small class="hello_text">
              Hello, I'm
            </small>
          </span>
        </div>
        <div
          id="name"
          class="text-6xl my-2.5 font-bold"
        >
          <h1>
            <span>
              Souvik
            </span>
            <span>
              Joy
            </span>
          </h1>
        </div>
        <div
          id="profession"
          class="text-2xl mb-7"
        >
          Designer
        </div>
        <div>
          <ul>
            <li
              id="email"
              class="flex place-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="svg_icon mr-6"
              >
                <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
              </svg>
              souviksahajoy@gmail.com
            </li>
            <li
              id="phone"
              class="flex place-items-center my-2.5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="svg_icon mr-6"
              >
                <path d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z" />
              </svg>
              +88017123456789
            </li>
            <li
              id="location"
              class="flex place-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="svg_icon mr-6"
              >
                <path d="M2.002,9.538c-0.023,0.411,0.207,0.794,0.581,0.966l7.504,3.442l3.442,7.503c0.164,0.356,0.52,0.583,0.909,0.583 c0.019,0,0.037-0.001,0.057-0.002c0.41-0.022,0.765-0.295,0.894-0.686l5.595-17.032c0.117-0.358,0.023-0.753-0.243-1.02 s-0.66-0.358-1.02-0.243L2.688,8.645C2.297,8.773,2.024,9.128,2.002,9.538z" />
              </svg>
              109/5, Hatembag, Rayer Bazaar, Dhaka-1209
            </li>
          </ul>
        </div>
      </div>
      <figure class="fig">
        <img
          src="~/assets/profile-img.webp"
          alt=""
          class="profile_image rounded-full"
        />
      </figure>
    </div>
    <div class="page page-2">
      2
    </div>
    <div class="page page-3">
      3
    </div>
    <div class="page page-4">
      4
    </div>
    <div class="page page-5">
      5
    </div>
    <div class="page page-6">
      6
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {

  },
  head () {
    return {
      title: 'Home'
    }
  },
  mounted() {
    this.animateOnScroll()
    let pages = document.querySelectorAll(".page");
    for (let i = 0; i < pages.length; i++) {
      const scene = this.$scrollmagic
        .scene({
          triggerElement: pages[i],
        })
        .setPin(pages[i], { pushFollowers: false })
        .addIndicators({ name: "scene" + [i] });
      this.$scrollmagic.addScene(scene);
    }
    this.anima()
     const scene1 = this.$scrollmagic
       .scene({
         triggerElement: ".page3",
         triggerHook: 0,
         duration: "100%",
       })
       .setPin(".page3", { pushFollowers: false })
       .addIndicators({ name: "scene1" });
     this.$scrollmagic.addScene(scene1);
  },
  methods: {
    animateOnScroll() {
      this.$gsap.to('#name , #profession, #email, #phone, #location', {
        x: -700,
        stagger: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.page-1',
          pin: true,
          // end: 'bottom',
          scrub: true
        }
      },
      this.$gsap.to('.fig', {
        x: 1800,
        stagger: 0.5,
        ease: 'Power1.easeInOut',
        scrollTrigger: {
          trigger: '.page-1',
          pin: true,
          end: 'bottom',
          scrub: true
        }
      }))
    },
    anima( ) {
      const tl = this.$gsap.timeline({repeat: 20, repeatDelay: 10});
      tl.fromTo('span#hello.bubble',
        {
            x: -800,
            scale: 0.8
        },
        {
            x: 0,
            scale: 2,
            duration: 1
        }
      );
      tl.fromTo('#name , #profession, #email, #phone, #location',
        {
            x: -700
        },
        {
            x: 0,
            duration: 2,
            stagger: 0.5
        }
      );
      tl.fromTo('.fig',
        {
            x: 1800
        },
        {
            x: 0,
            scale: 1.2,
            duration: 2,
            stagger: 1
        },
        "-=2"
      )
      this.$gsap.to(window, { duration: 5, scrollTo: 1700, delay: 5 })
      this.$gsap.to(window, { duration: 5, scrollTo: 2600, delay: 15 })
      this.$gsap.to(window, { duration: 5, scrollTo: 3450, delay: 25 })
      this.$gsap.to(window, { duration: 5, scrollTo: 4350, delay: 35 })
      this.$gsap.to(window, { duration: 5, scrollTo: 5350, delay: 45 })
      this.$gsap.to(window, { duration: 5, scrollTo: 0, delay: 55 });
    }
  }
}
</script>

<style lang="scss">
  #landing_page {
    .page {
      height: 100vh;
      &.page-1 {
        background-color: #cbcbcb;
      }
      &.page-2 {
        background-color: #efd591;
      }
      &.page-3 {
        background-color: #c090ec;
      }
      &.page-4 {
        background-color: #ecc5a9;
      }
      &.page-5 {
        background-color: #8ff3f3;
      }
      &.page-6 {
        background-color: #cfbe94;
      }
    }
  }
</style>
