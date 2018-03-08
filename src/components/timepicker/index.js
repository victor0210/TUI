import Timepicker from './timepicker.vue'
import Vue from 'vue'

Timepicker.install = function () {
  if (this.install.installed) return
  Vue.component(Timepicker.name, Timepicker)
}

export default Timepicker
