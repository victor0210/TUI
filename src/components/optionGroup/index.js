import OptionGroup from './option-group.vue'
import Vue from 'vue'

OptionGroup.install = function () {
  if (this.install.installed) return
  Vue.component(OptionGroup.name, OptionGroup)
}

export default OptionGroup
