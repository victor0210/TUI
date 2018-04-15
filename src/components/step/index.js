import Step from './step.vue'
import Vue from 'vue'

Step.install = function () {
  if (this.install.installed) return
  Vue.component(Step.name, Step)
}

export default Step
