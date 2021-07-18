import Vue from 'vue'
import Router from 'vue-router'
import Index from '~/pages/index'
import Contact from '~/pages/contact'
import About from '~/pages/about'

Vue.use(Router)

export function createRouter () {
  return new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'index',
        component: Index
      },
      {
        path: '/about',
        name: 'about',
        component: About
      },
      {
        path: '/contact',
        name: 'contact',
        component: Contact
      }
    ]
  })
}
