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
import Radio from './components/radio/index'
import RadioGroup from './components/radioGroup/index'
import Select from './components/select/index'
import Option from './components/option/index'
import OptionGroup from './components/optionGroup/index'
import InputNumber from './components/inputNumber/index'
import Cascader from './components/cascader/index'
import Datepicker from './components/datepicker/index'

import TFocus from './directives/focus'

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
  Aside,
  Radio,
  RadioGroup,
  Select,
  Option,
  OptionGroup,
  InputNumber,
  Cascader,
  Datepicker
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

const TD = {
  TFocus
}

const Component = {
  version: process.env.version,
  install,
  ...TD,
  ...Tui
}

export default Component
