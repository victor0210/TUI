import Select from './select.vue'
import Vue from 'vue'

Select.install = function () {
  if (this.install.installed) return
  Vue.component(Select.name, Select)
}

export default Select
