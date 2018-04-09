import DropDown from './dropdown.vue'
import Vue from 'vue'

DropDown.install = function () {
  if (this.install.installed) return
  Vue.component(DropDown.name, DropDown)
}

export default DropDown
