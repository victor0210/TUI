import TabPanel from './tab-panel.vue'
import Vue from 'vue'

TabPanel.install = function () {
  if (this.install.installed) return
  Vue.component(TabPanel.name, TabPanel)
}

export default TabPanel
