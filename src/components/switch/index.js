import Vue from 'vue'
import Switch from './switch.vue'

Switch.install = function () {
  if (this.install.installed) return
  Vue.component(Switch.name, Switch)
}

export default Switch
