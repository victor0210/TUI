import Input from './input.vue'

Input.install = function (Vue) {
  if (this.install.installed) return
  Vue.component(Input.name, Input)
}

export default Input
