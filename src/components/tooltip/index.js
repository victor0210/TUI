import Tooltip from './tooltip.vue'
import Vue from 'vue'

Tooltip.install = function () {
  if (this.install.installed) return
  Vue.component(Tooltip.name, Tooltip)
}

export default Tooltip
