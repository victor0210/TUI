import Progress from './progress.vue'
import Vue from 'vue'

Progress.install = function () {
  if (this.install.installed) return
  Vue.component(Progress.name, Progress)
}

export default Progress
