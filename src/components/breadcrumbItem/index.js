import BreadCrumbItem from './breadcrumb-item.vue'
import Vue from 'vue'

BreadCrumbItem.install = function () {
  if (this.install.installed) return
  Vue.component(BreadCrumbItem.name, BreadCrumbItem)
}

export default BreadCrumbItem
