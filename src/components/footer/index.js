import Footer from './footer.vue'
import Vue from 'vue'

Footer.install = function () {
  if (this.install.installed) return
  Vue.component(Footer.name, Footer)
}

export default Footer
