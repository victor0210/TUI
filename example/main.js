// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import demoPanel from './components/DemoPanel'
import router from './router'

import hljs from 'highlightjs'

Vue.directive('hlt', function () {
  let blocks = this.el.querySelectorAll('pre code')
  Array.prototype.forEach.call(blocks, hljs.highlightBlock)
})

Vue.component('demo-panel', demoPanel)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
