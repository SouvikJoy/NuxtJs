import { defineConfig } from 'windicss/helpers'
import colors from 'windicss/colors'

export default defineConfig({
  darkMode: 'media', // or 'media'
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        extend: {
          screens: {
            light: { raw: '(prefers-color-scheme: light)' },
            dark: { raw: '(prefers-color-scheme: dark)' }
          }
        }
      },
      colors: {
        gray: colors.coolGray,
        blue: colors.lightBlue,
        red: colors.rose,
        pink: colors.fuchsia,
        'primary': 'hsla(170, 90%, 43%, 1.0)',
        'primary-50': 'hsla(170, 90%, 43%, 0.5)',
        'secondary': 'hsla(211, 28%, 29%, 1.0)',
        'white': 'hsla(0, 0%, 100%, 1.0)',
        'white-50': 'hsla(0, 0%, 100%, 0.5)',
        'black': 'hsla(0, 0%, 0%, 1.0)',
        'facebook': 'hsla(220, 46%, 48%, 1.0)',
        'twitter': 'hsla(206, 88%, 59%, 1.0)',
        'google': 'hsla(5, 81%, 56%, 1.0)',
        'linkedin': 'hsla(206, 64%, 43%, 1.0)',
        'primary-text' : '#2c3e50',
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        uirounded: ['SF Pro Rounded', 'sans-serif']
      },
      extend: {
        spacing: {
          128: '32rem',
          144: '36rem',
        },
        borderRadius: {
          '4xl': '2rem',
        },
      },
    },
  },
  shortcuts: {
    // Default
    default_app: 'font-uirounded text-primary-text',
    portfolio_header: 'grid grid-cols-2 place-items-center justify-between py-[20px]',
    portfolio_main: '',
    portfolio_footer: '',
    // Index Page
    index_page_1: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-300 dark:text-white dark:bg-gray-900 h-screen',
    index_page_2: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-400 dark:text-white dark:bg-gray-700 h-screen',
    index_page_3: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-500 dark:text-white dark:bg-gray-500 h-screen',
    index_page_4: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-600 dark:text-white dark:bg-gray-300 h-screen',
    index_page_5: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-700 dark:text-white dark:bg-gray-200 h-screen',
    index_page_6: 'p-20 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 place-items-center bg-gray-800 dark:text-white dark:bg-gray-100 h-screen',
    index_greeting_bubble_container: 'mb-6',
    index_greeting_bubble: 'bg-primary text-[14px] leading-[24px] tracking-[0.04em] font-extrabold py-[10px] px-[30px] rounded-br-[20px] rounded-tl-[20px] rounded-tr-[20px]',
    index_greeting_bubble_text: 'text-black',
    portfolio_author_name: 'text-6xl my-2.5 font-bold',
    portfolio_author_profession: 'text-2xl mb-7 tracking-[0.01em]',
    portfolio_author_email: 'dark:fill-[#fff] mr-6',
    portfolio_author_phone: 'dark:fill-[#fff] mr-6',
    portfolio_author_location: 'dark:fill-[#fff] mr-6',
    portfolio_author_profile_image: 'rounded-full w-[300] h-[300px] xl:w-[450] xl:h-[450px]',
  },
  plugins: [],
})
