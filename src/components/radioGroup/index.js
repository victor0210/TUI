import TRadioGroup from './radio-group.vue'
import Vue from 'vue'

TRadioGroup.install = function () {
  if (this.install.installed) return
  Vue.component(TRadioGroup.name, TRadioGroup)
}

export default TRadioGroup
