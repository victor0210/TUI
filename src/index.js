import Button from './components/button/index'
import ButtonGroup from './components/buttonGroup/index'
import Row from './components/row/index'
import Col from './components/col/index'
import Input from './components/input/index'
import CheckBox from './components/checkbox/index'
import CheckBoxGroup from './components/checkboxGroup/index'
import Layout from './components/layout/index'
import Header from './components/header/index'
import Footer from './components/footer/index'
import Content from './components/content/index'
import Aside from './components/aside/index'
import Radio from './components/radio/index'
import Switch from './components/switch/index'
import RadioGroup from './components/radioGroup/index'
import Select from './components/select/index'
import Option from './components/option/index'
import OptionGroup from './components/optionGroup/index'
import InputNumber from './components/inputNumber/index'
import Cascader from './components/cascader/index'
import Datepicker from './components/datepicker/index'
import Timepicker from './components/timepicker/index'
import Form from './components/form/index'
import FormItem from './components/formItem/index'
import Reset from './components/reset/index'
import Submit from './components/submit/index'
import Table from './components/table/index'
import TableColumn from './components/tableColumn/index'
import Tag from './components/tag/index'
import Progress from './components/progress/index'
import Tree from './components/tree/index'
import Pagination from './components/pagination/index'
import Badge from './components/badge/index'
import Alert from './components/alert/index'

//  global
import Dialog from './components/dialog/index'
import Loading from './components/loading/index'

import TFocus from './directives/focus'
import TLoading from './directives/loading'

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
  Switch,
  RadioGroup,
  Select,
  Option,
  OptionGroup,
  InputNumber,
  Cascader,
  Datepicker,
  Timepicker,
  Form,
  FormItem,
  Reset,
  Submit,
  Table,
  TableColumn,
  Tag,
  Progress,
  Tree,
  Pagination,
  Badge,
  Alert
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(Tui).forEach((key) => {
    const name = Tui[key].name ? Tui[key].name : key
    Vue.component(name, Tui[key])
  })

  Vue.prototype.$TDialog = Dialog
  Vue.prototype.$TLoading = Loading
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const TD = {
  TFocus,
  TLoading
}

const Component = {
  version: process.env.version,
  install,
  ...TD,
  ...Tui
}

export default Component
