import Vue from 'vue'
import Router from 'vue-router'
const Index = () => import ('~/pages/index')
const About = () => import ('~/pages/about')
const Contact = () => import ('~/pages/contact')
const Skills = () => import ('~/pages/skills')
const Portfolio = () => import ('~/pages/portfolio')
const Hireme = () => import ('~/pages/hireme')

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
      },
      {
        path: '/skills',
        name: 'skills',
        component: Skills
      },
      {
        path: '/portfolio',
        name: 'portfolio',
        component: Portfolio
      },
      {
        path: '/hireme',
        name: 'hireme',
        component: Hireme
      }
    ]
  })
}
