import Datepicker from './datepicker.vue'
import Vue from 'vue'

Datepicker.install = function () {
  if (this.install.installed) return
  Vue.component(Datepicker.name, Datepicker)
}

export default Datepicker
