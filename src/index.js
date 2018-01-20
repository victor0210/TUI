import Toast from './components/toast'
import Button from './components/button/index'
import Row from './components/row/index'
import Col from './components/col/index'

const Tui = {
  Toast,
  Button,
  Row,
  Col
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(Tui).forEach((key) => {
    const name = Tui[key].name ? Tui[key].name : key
    Vue.component(name, Tui[key])
  })

  Vue.prototype.$Toast = Toast
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const Component = {
  version: process.env.version,
  install,
  ...Tui
}

export default Component
