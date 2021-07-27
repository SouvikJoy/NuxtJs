<template>
  <div
    class="index_page"
  >
    <div
      id="page_1"
      class="index_page_1"
    >
      <div class="index_page_1_container">
        <div class="index_page_1_greeting_bubble_container">
          <span
            class="index_page_1_greeting_bubble"
          >
            <small class="index_page_1_greeting_bubble_text">
              Hello, I'm
            </small>
          </span>
        </div>
        <div
          class="index_page_1_portfolio_author_name"
        >
          <h1>
            {{ author.name }}
          </h1>
        </div>
        <div
          class="index_page_1_portfolio_author_profession"
        >
          {{ author.designation }}
        </div>
        <div class="mb-8">
          <ul>
            <li
              class="index_page_1_portfolio_author_email_container"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="index_page_1_portfolio_author_email"
              >
                <path d="M20,4H4C2.896,4,2,4.896,2,6v12c0,1.104,0.896,2,2,2h16c1.104,0,2-0.896,2-2V6C22,4.896,21.104,4,20,4z M20,8.7l-8,5.334 L4,8.7V6.297l8,5.333l8-5.333V8.7z" />
              </svg>
              <a href="mailto:souviksahajoy@gmail.com?subject=About Hiring You as A Developer.">
                souviksahajoy@gmail.com
              </a>
            </li>
            <li
              class="index_page_1_portfolio_author_phone_container"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="index_page_1_portfolio_author_phone"
              >
                <path d="M20.487,17.14l-4.065-3.696c-0.399-0.363-1.015-0.344-1.391,0.043l-2.393,2.461c-0.576-0.11-1.734-0.471-2.926-1.66 c-1.192-1.193-1.553-2.354-1.66-2.926l2.459-2.394c0.388-0.376,0.406-0.991,0.043-1.391L6.859,3.513 c-0.363-0.401-0.98-0.439-1.391-0.087l-2.17,1.861C3.125,5.461,3.022,5.691,3.008,5.936c-0.015,0.25-0.301,6.172,4.291,10.766 C11.305,20.707,16.323,21,17.705,21c0.202,0,0.326-0.006,0.359-0.008c0.245-0.014,0.475-0.117,0.648-0.291l1.86-2.171 C20.926,18.119,20.887,17.503,20.487,17.14z" />
              </svg>
              <a href="tel:+8809638796021">+8809638796021</a>
            </li>
            <li
              class="index_page_1_portfolio_author_location_container"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                class="index_page_1_portfolio_author_location"
              >
                <path d="M2.002,9.538c-0.023,0.411,0.207,0.794,0.581,0.966l7.504,3.442l3.442,7.503c0.164,0.356,0.52,0.583,0.909,0.583 c0.019,0,0.037-0.001,0.057-0.002c0.41-0.022,0.765-0.295,0.894-0.686l5.595-17.032c0.117-0.358,0.023-0.753-0.243-1.02 s-0.66-0.358-1.02-0.243L2.688,8.645C2.297,8.773,2.024,9.128,2.002,9.538z" />
              </svg>
              {{ author.address }}
            </li>
          </ul>
        </div>
        <div class="grid grid-cols-4 index_page_social">
          <button>
            Facebook
          </button>
          <button @click="clickAction">
            Twitter
          </button>
          <button @click="clickAction">
            Google
          </button>
          <button @click="clickAction">
            Github
          </button>
        </div>
      </div>
      <figure class="index_page_1_portfolio_author_profile_image_container">
        <img
          src="~/assets/profile-img.jpg"
          alt=""
          class="index_page_1_portfolio_author_profile_image"
        />
      </figure>
    </div>
    <div
      id="page_2"
      class="index_page_2"
    >
      <div class="index_page_2_container">
        <img
          src="~/assets/about.png"
          alt=""
          class="image"
        />
      </div>
      <div class="about_me z-10 px-[40px]">
        <h1 class="text-[40px] mb-4 font-bold">
          About Me
        </h1>
        <p class="mb-8">
          A Prolific, Energetic, Self-motivated and Imaginative
          <span class="font-extrabold text-primary">
            "{{ author.designation }}"
          </span> <br />
          Able to work alongside other talented IT professionals in developing & customizing Web-Apps to the very highest standards.
        </p>
        <ul>
          <li
            v-for="item in items"
            :key="item.name"
            class="lang_name"
          >
            <span>
              {{ item.name }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Index',
  components: {

  },
  data: () => ({
    author: {
      name: 'Souvik Joy',
      designation: 'UI/UX Designer & Frontend Web Developer',
      address: '109/5, Hatembag, Rayer Bazaar, Dhaka-1209'
    },
    items: [
      {
        name: 'Html'
      },
      {
        name: 'Css'
      },
      {
        name: 'JavaScript'
      },
      {
        name: 'Vue Js'
      },
      {
        name: 'Nuxt Js'
      },
      {
        name: 'Bootstrap'
      }
    ],
  }),
  head () {
    return {
      title: 'Home'
    }
  },
  mounted() {
    this.animateOn()
  },
  methods: {
    clickAction: function () {
      console.log('Facebook')
    },
    animateOn () {
      const tlFirstScroll = this.$gsap.timeline()
      tlFirstScroll
        .to('.index_page_1_greeting_bubble',
          {
            opacity: 0,
            //duration: 0.5,
            scrollTrigger: {
              trigger: '.index_page_1',
              pin: true,
              //end: 'bottom',
              scrub: true
            }
          }
        )
        .to('.index_page_1_portfolio_author_name , .index_page_1_portfolio_author_profession, .index_page_1_portfolio_author_email_container, .index_page_1_portfolio_author_phone_container, .index_page_1_portfolio_author_location_container, .index_page_social', {
            x: -800,
            stagger: 0.5,
            //duration: 10,
            scrollTrigger: {
              trigger: '.index_page_1',
              pin: true,
              //end: 'bottom',
              scrub: true
            }
          },
        )
        .to('.index_page_1_portfolio_author_profile_image',
          {
            x: 800,
            stagger: 0.5,
            //duration: 10,
            scrollTrigger: {
              trigger: '.index_page_1',
              pin: true,
              //end: 'bottom',
              scrub: true
            }
          },
        )
      .set('.image',
        {
          y: -500,
          scale: 2
        }
      )
      const scene = this.$scrollmagic.scene({
        triggerElement: '.index_page_1',
        triggerHook: 0,
        duration: 1200
      })
      .setTween('.image',
        {
          css: {
            x: 0,
            y: 0,
            scale: 1
          }
        }
      )
      this.$scrollmagic.addScene(scene)

      const scene2 = this.$scrollmagic.scene({
        triggerElement: '.index_page_2',
        triggerHook: 0,
        duration: 1400
      })
      .setTween('.about_me',
        {
          css: {
            x: 0
          }
        }
      )
        .setTween('.about_me',
          {
            css: {
              x: 500
            }
          }
        )
      this.$scrollmagic.addScene(scene2)
    }
  }
}
</script>

<style lang="scss">

</style>
