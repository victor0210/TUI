import Reset from './reset.vue'

Reset.install = function (Vue) {
  if (this.install.installed) return
  Vue.component(Reset.name, Reset)
}

export default Reset
