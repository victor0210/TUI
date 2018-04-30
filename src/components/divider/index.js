import Divider from './divider'
import Vue from 'vue'

Divider.install = function () {
  if (this.install.installed) return
  Vue.component(Divider.name, Divider)
}

export default Divider
