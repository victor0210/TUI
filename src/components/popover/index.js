import Popover from './popover.vue'
import Vue from 'vue'

Popover.install = function () {
  if (this.install.installed) return
  Vue.component(Popover.name, Popover)
}

export default Popover
