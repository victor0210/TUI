import TableColumn from './table-column.vue'
import Vue from 'vue'

TableColumn.install = function () {
  if (this.install.installed) return
  Vue.component(TableColumn.name, TableColumn)
}

export default TableColumn
