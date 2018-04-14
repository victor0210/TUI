import Tabs from './tabs.vue'
import Vue from 'vue'

Tabs.install = function () {
  if (this.install.installed) return
  Vue.component(Tabs.name, Tabs)
}

export default Tabs
