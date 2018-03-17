import Table from './table.vue'
import Vue from 'vue'

Table.install = function () {
  if (this.install.installed) return
  Vue.component(Table.name, Table)
}

export default Table
