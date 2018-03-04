import Content from './content.vue'
import Vue from 'vue'

Content.install = function () {
  if (this.install.installed) return
  Vue.component(Content.name, Content)
}

export default Content
