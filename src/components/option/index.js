import Option from './option.vue'
import Vue from 'vue'

Option.install = function () {
  if (this.install.installed) return
  Vue.component(Option.name, Option)
}

export default Option
