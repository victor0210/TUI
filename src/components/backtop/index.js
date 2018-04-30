import BackTop from './backtop.vue'
import Vue from 'vue'

BackTop.install = function () {
  if (this.install.installed) return
  Vue.component(BackTop.name, BackTop)
}

export default BackTop
