import Aside from './aside.vue'
import Vue from 'vue'

Aside.install = function () {
  if (this.install.installed) return
  Vue.component(Aside.name, Aside)
}

export default Aside
