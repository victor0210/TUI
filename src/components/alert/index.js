import Alert from './alert.vue'
import Vue from 'vue'

Alert.install = function () {
  if (this.install.installed) return
  Vue.component(Alert.name, Alert)
}

export default Alert
