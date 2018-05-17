import Range from './range.vue'
import Vue from 'vue'

Range.install = function () {
  if (this.install.installed) return
  Vue.component(Range.name, Range)
}

export default Range
