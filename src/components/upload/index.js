import Upload from './upload'
import Vue from 'vue'

Upload.install = function () {
  if (this.install.installed) return
  Vue.component(Upload.name, Upload)
}

export default Upload
