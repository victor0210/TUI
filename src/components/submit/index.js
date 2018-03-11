import Submit from './submit.vue'

Submit.install = function (Vue) {
  if (this.install.installed) return
  Vue.component(Submit.name, Submit)
}

export default Submit
