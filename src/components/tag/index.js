import Tag from './tag.vue'
import Vue from 'vue'

Tag.install = function () {
  if (this.install.installed) return
  Vue.component(Tag.name, Tag)
}

export default Tag
