import Vue from 'vue'
import Router from 'vue-router'

const Readme = () => import('../README.md')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'document',
      component: Readme
    }
  ]
})
