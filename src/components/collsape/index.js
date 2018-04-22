import Collsape from './collsape.vue'
import Vue from 'vue'

Collsape.install = function () {
  if (this.install.installed) return
  Vue.component(Collsape.name, Collsape)
}

export default Collsape
