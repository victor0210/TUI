import Form from './form.vue'
import Vue from 'vue'

Form.install = function () {
  if (this.install.installed) return
  Vue.component(Form.name, Form)
}

export default Form
