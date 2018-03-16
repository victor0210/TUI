import TableCell from './table-cell.vue'
import Vue from 'vue'

TableCell.install = function () {
  if (this.install.installed) return
  Vue.component(TableCell.name, TableCell)
}

export default TableCell
