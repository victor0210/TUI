import Switch from './switch.vue'
import Vue from 'vue'

Switch.install = function () {
  if (this.install.installed) return
  Vue.component(Switch.name, Switch)
}

export default Switch
