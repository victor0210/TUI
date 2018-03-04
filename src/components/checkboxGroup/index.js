import CheckboxGroup from './checkbox-group.vue'
import Vue from 'vue'

CheckboxGroup.install = function () {
  if (this.install.installed) return
  Vue.component(CheckboxGroup.name, CheckboxGroup)
}

export default CheckboxGroup
