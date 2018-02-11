import InputNumber from './input-number'
import Vue from 'vue'

InputNumber.install = function () {
  if (this.install.installed) return
  Vue.component(InputNumber.name, InputNumber)
}

export default InputNumber
