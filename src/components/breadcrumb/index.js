import BreadCrumb from './breadcrumb.vue'
import Vue from 'vue'

BreadCrumb.install = function () {
  if (this.install.installed) return
  Vue.component(BreadCrumb.name, BreadCrumb)
}

export default BreadCrumb
