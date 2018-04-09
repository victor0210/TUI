import DropDownItem from './dropdown-item.vue'
import Vue from 'vue'

DropDownItem.install = function () {
  if (this.install.installed) return
  Vue.component(DropDownItem.name, DropDownItem)
}

export default DropDownItem
