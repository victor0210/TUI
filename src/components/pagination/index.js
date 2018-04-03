import Pagination from './pagination.vue'
import Vue from 'vue'

Pagination.install = function () {
  if (this.install.installed) return
  Vue.component(Pagination.name, Pagination)
}

export default Pagination
