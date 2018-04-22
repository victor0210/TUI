import CollsapeItem from './collsape-item.vue'
import Vue from 'vue'

CollsapeItem.install = function () {
  if (this.install.installed) return
  Vue.component(CollsapeItem.name, CollsapeItem)
}

export default CollsapeItem
