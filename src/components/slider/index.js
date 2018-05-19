import Slider from './slider.vue'
import Vue from 'vue'

Slider.install = function () {
  if (this.install.installed) return
  Vue.component(Slider.name, Slider)
}

export default Slider
