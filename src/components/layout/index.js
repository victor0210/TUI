import Layout from './layout.vue'
import Vue from 'vue'

Layout.install = function () {
  if (this.install.installed) return
  Vue.component(Layout.name, Layout)
}

export default Layout
