import Vue from 'vue'
import App from './App'
import demoPanel from './components/DemoPanel'
import markdown from './components/Markdown'
import router from './router'
import highlight from 'highlightjs'
import Guide from './components/Guide'
// import part of tui
// import Button from '../src/components/button'
// Vue.use(Button)

// import the whole tui toolkit
import Tui from '../src'
Vue.use(Tui)

// code highlight transform to vue directive
Vue.directive('hlt', function (el) {
  let blocks = el.querySelectorAll('pre code')
  Array.prototype.forEach.call(blocks, highlight.highlightBlock)
})

Vue.component('demo-panel', demoPanel)
Vue.component('markdown', markdown)
Vue.component('guide', Guide)

/* eslint-disable  */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})

require('./mocks/index')
