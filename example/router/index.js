import Vue from 'vue'
import Router from 'vue-router'

const Readme = () => import('../README.md')
const Button = () => import('../pages/button.vue')
const Layout = () => import('../pages/layout.vue')
const Dialog = () => import('../pages/dialog.vue')
const Input = () => import('../pages/input.vue')
const Checkbox = () => import('../pages/checkbox.vue')

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
    },
    {
      path: '/dialog',
      name: 'dialog',
      component: Dialog
    },
    {
      path: '/input',
      name: 'input',
      component: Input
    },
    {
      path: '/checkbox',
      name: 'checkbox',
      component: Checkbox
    }
  ]
})
