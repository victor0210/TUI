import CheckBox from './checkbox.vue'
import Vue from 'vue'

CheckBox.install = function () {
  if (this.install.installed) return
  Vue.component(CheckBox.name, CheckBox)
}

export default CheckBox
