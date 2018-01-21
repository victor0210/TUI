import Vue from 'vue'
import Router from 'vue-router'

const Readme = () => import('../README.md')
const Button = () => import('../pages/button.vue')
const Layout = () => import('../pages/layout.vue')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'document',
      component: Readme
    },
    {
      path: '/layout',
      name: 'layout',
      component: Layout
    },
    {
      path: '/button',
      name: 'button',
      component: Button
    }
  ]
})
