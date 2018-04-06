import Badge from './badge.vue'
import Vue from 'vue'

Badge.install = function () {
  if (this.install.installed) return
  Vue.component(Badge.name, Badge)
}

export default Badge
