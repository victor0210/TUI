import TRadio from './radio.vue'
import Vue from 'vue'

TRadio.install = function () {
  if (this.install.installed) return
  Vue.component(TRadio.name, TRadio)
}

export default TRadio
