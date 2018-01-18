import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'document',
      component: r => require.ensure([], () => r(require('../README.md')))
    }
  ]
})
