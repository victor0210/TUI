import Modal from './modal.vue'
import Vue from 'vue'

Modal.install = function () {
  if (this.install.installed) return
  Vue.component(Modal.name, Modal)
}

export default Modal
