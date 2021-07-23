import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media', // or 'media'
  theme: {
    extend: {
      screens: {
        screens: {
          light: { raw: '(prefers-color-scheme: light)' },
          dark: { raw: '(prefers-color-scheme: dark)' }
        }
      },
      colors: {
        'primary': 'hsla(170, 90%, 43%, 1.0)',
        'primary-50': 'hsla(170, 90%, 43%, 0.5)',
        'secondary': 'hsla(211, 29%, 24%, 1.0)',
        'white': 'hsla(0, 0%, 100%, 1.0)',
        'white-50': 'hsla(0, 0%, 100%, 0.5)',
        'black': 'hsla(0, 0%, 0%, 1.0)',
        'facebook': 'hsla(220, 46%, 48%, 1.0)',
        'twitter': 'hsla(206, 88%, 59%, 1.0)',
        'google': 'hsla(5, 81%, 56%, 1.0)',
        'linkedin': 'hsla(206, 64%, 43%, 1.0)'
      },
      fontFamily: {
        uirounded: ['SF Pro Rounded', 'sans-serif']
      }
    },
  },
  shortcuts: {
    // Default
    default_app: 'font-uirounded text-secondary bg-primary',
    default_header: 'bg-transparent w-screen z-[40]',
    default_footer: 'text-center text-white bg-secondary',
    //Component
    portfolio_header: 'flex place-items-center justify-around py-[20px]',
    portfolio_footer: 'flex place-items-center justify-center',
    // Router
    portfolio_nuxt_link: 'text-white m-[20px] hover:(border-b-solid border-b-[3px] border-b-primary)',
    portfolio_nuxt_link_exact_active:'font-bolder border-b-solid border-b-[3px] border-b-primary text-secondary',
    // Index Page-1
    index_page_1: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-300 dark:text-white dark:bg-gray-900 h-[95vh]',
    index_page_1_container: 'order-last xl:order-first',
    index_page_1_greeting_bubble_container: 'mb-6',
    index_page_1_greeting_bubble: 'bg-primary leading-[24px] tracking-[0.04em] py-[10px] px-[30px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]',
    index_page_1_greeting_bubble_text: 'text-black text-[14px] font-bold ',
    index_page_1_portfolio_author_name: 'text-6xl my-2.5 font-bold',
    index_page_1_portfolio_author_profession: 'text-2xl mb-7 tracking-[0.01em]',
    index_page_1_portfolio_author_email_container: 'flex place-items-center hover:fill-primary dark:fill-white',
    index_page_1_portfolio_author_email: 'mr-6',
    index_page_1_portfolio_author_phone_container: 'flex place-items-center my-2.5 hover:fill-primary dark:fill-white',
    index_page_1_portfolio_author_phone: 'mr-6',
    index_page_1_portfolio_author_location_container: 'flex place-items-center hover:fill-primary dark:fill-white',
    index_page_1_portfolio_author_location: 'mr-6',
    index_page_1_portfolio_author_profile_image: 'rounded-full w-[300] h-[300px] xl:w-[450] xl:h-[450px]',
    // Index Page -2
    index_page_2: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-400 dark:text-white dark:bg-gray-700 h-screen',
    index_page_2_container: 'container mx-auto text-center',
    index_page_3: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-500 dark:text-white dark:bg-gray-500 h-screen',
    index_page_4: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-600 dark:text-white dark:bg-gray-300 h-screen',
    index_page_5: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-700 dark:text-white dark:bg-gray-200 h-screen',
    index_page_6: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-800 dark:text-white dark:bg-gray-100 h-screen',
    // Character
    character_circle: 'fill-[]',

    //shapes
    lang_name: 'inline-block bg-primary leading-[24px] tracking-[0.04em] py-[10px] mr-[10px] my-[10px]  px-[20px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]',
    shape_hexagon: 'relative w-[300px] h-[150px] bg-primary my-[90px] mx-[0] before:(content \'\' absolute w-0 border-l-[150px] border-l-solid border-l-transparent border-r-[150px] border-r-solid border-r-transparent bottom-[100%] border-b-[87px] border-b-solid border-b-primary) after:(content \'\' absolute w-0 border-l-[150px] border-l-solid border-l-transparent border-r-[150px] border-r-solid border-r-transparent top-[100%] border-t-[87px] border-t-solid border-t-primary)'


  },
  plugins: [],
})
