import Cascader from './cascader.vue'
import Vue from 'vue'

Cascader.install = function () {
  if (this.install.installed) return
  Vue.component(Cascader.name, Cascader)
}

export default Cascader
