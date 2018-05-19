import Button from './components/button/index'
import ButtonGroup from './components/buttonGroup/index'
import Row from './components/row/index'
import Col from './components/col/index'
import Input from './components/input/index'
import ValidateIcon from './components/input/validateIcon'
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
import Upload from './components/upload/index'
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
import Menu from './components/menu/index'
import DropDown from './components/dropdown/index'
import DropDownItem from './components/dropdownItem/index'
import Tabs from './components/tabs/index'
import TabPanel from './components/tabPanel/index'
import BreadCrumb from './components/breadcrumb/index'
import BreadCrumbItem from './components/breadcrumbItem/index'
import Step from './components/step/index'
import Modal from './components/modal/index'
import Popover from './components/popover/index'
import Tooltip from './components/tooltip/index'
import Collsape from './components/collsape/index'
import CollsapeItem from './components/collsapeItem/index'
import BackTop from './components/backtop/index'
import Divider from './components/divider/index'
import Slider from './components/slider/index'

//  global
import Dialog from './components/dialog/index'
import Loading from './components/loading/index'
import Message from './components/message/index'
import Notify from './components/notify/index'

//  directive
import TFocus from './directives/focus'
import TLoading from './directives/loading'
import TPopover from './directives/popover'
import TTooltip from './directives/tooltip'

const Tui = {
  Button,
  ButtonGroup,
  Row,
  Col,
  Input,
  ValidateIcon,
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
  Upload,
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
  Alert,
  Menu,
  DropDown,
  DropDownItem,
  Tabs,
  TabPanel,
  BreadCrumb,
  BreadCrumbItem,
  Step,
  Modal,
  Popover,
  Tooltip,
  Collsape,
  CollsapeItem,
  BackTop,
  Divider,
  Slider
}

const install = function (Vue, opts = {}) {
  if (install.installed) return
  Object.keys(Tui).forEach((key) => {
    const name = Tui[key].name ? Tui[key].name : key
    Vue.component(name, Tui[key])
  })

  Vue.prototype.$TDialog = Dialog
  Vue.prototype.$TLoading = Loading
  Vue.prototype.$TMessage = Message
  Vue.prototype.$TNotify = Notify
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const TD = {
  TFocus,
  TLoading,
  TPopover,
  TTooltip
}

const INFO = {
  version: process.env.version
}

const Component = {
  install,
  INFO,
  TD,
  Tui
}

export default Component
