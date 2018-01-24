import ButtonGroup from './buttonGroup'

ButtonGroup.install = function (Vue) {
  if (this.installed) return
  Vue.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
