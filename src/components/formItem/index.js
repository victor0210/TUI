import FormItem from './form-item.vue'
import Vue from 'vue'

FormItem.install = function () {
  if (this.install.installed) return
  Vue.component(FormItem.name, FormItem)
}

export default FormItem
