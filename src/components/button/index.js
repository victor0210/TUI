import Button from './button.vue'

Button.install = function (VUE) {
  if (this.install.installed) return
  VUE.component(Button.name, Button)
}

export default Button
