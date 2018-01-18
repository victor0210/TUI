import Toast from './toast.vue'
import Vue from 'vue'
import {prefixClass} from '../../utils/config.js'

Toast.initial = properties => {
  const _props = properties || {}

  const Instance = new Vue({
    data: _props,
    render (h) {
      return h(Toast, {
        props: _props
      })
    }
  })

  const component = Instance.$mount()
  document.body.appendChild(component.$el)
  const toast = Instance.$children[0]
  console.log(toast)

  return {
    toast ({type, duration}) {
      switch (type) {
        case 'show':

          break
        case 'hide':
          break
      }
    },
    component: toast,
    destroy () {
      document.body.removeChild(document.getElementsByClassName(`${prefixClass}-toast`)[0])
    }
  }
}

export default Toast
