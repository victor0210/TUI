import Menu from './menu.vue'
import Vue from 'vue'

Menu.install = function () {
  if (this.install.installed) return
  Vue.component(Menu.name, Menu)
}

export default Menu
