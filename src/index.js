import Button from './components/button/index'
import ButtonGroup from './components/buttonGroup/index'
import Row from './components/row/index'
import Col from './components/col/index'
import Dialog from './components/dialog/index'
import Input from './components/input/index'
import CheckBox from './components/checkbox/index'
import CheckBoxGroup from './components/checkboxGroup/index'
import Layout from './components/layout/index'
import Header from './components/header/index'
import Footer from './components/footer/index'
import Content from './components/content/index'
import Aside from './components/aside/index'

const Tui = {
  Button,
  ButtonGroup,
  Row,
  Col,
  Input,
  CheckBox,
  CheckBoxGroup,
  Layout,
  Header,
  Content,
  Footer,
  Aside
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(Tui).forEach((key) => {
    const name = Tui[key].name ? Tui[key].name : key
    Vue.component(name, Tui[key])
  })

  Vue.prototype.$Dialog = Dialog
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
