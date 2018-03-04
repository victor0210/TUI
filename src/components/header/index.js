import Header from './header.vue'
import Vue from 'vue'

Header.install = function () {
  if (this.install.installed) return
  Vue.component(Header.name, Header)
}

export default Header
