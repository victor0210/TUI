import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: r => require.ensure([], () => r(require('../components/HelloWorld')))
    },
    {
      path: '/test',
      name: 'test',
      component: r => require.ensure([], () => r(require('../docs/Hello.md')))
    }
  ]
})
