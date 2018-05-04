import ValidateIcon from './validate-icon.vue'
import Vue from 'vue'

ValidateIcon.install = function () {
  if (this.install.installed) return
  Vue.component(ValidateIcon.name, ValidateIcon)
}

export default ValidateIcon
