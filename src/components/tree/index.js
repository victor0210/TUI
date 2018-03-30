import Tree from './tree.vue'
import Vue from 'vue'

Tree.install = function () {
  if (this.install.installed) return
  Vue.component(Tree.name, Tree)
}

export default Tree
