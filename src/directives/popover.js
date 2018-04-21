import Vue from 'vue'

const TPopover = Vue.directive('t-popover', {
  bind (el, binding, vnode) {
    let pop = vnode.context.$refs[binding.arg]
    if (el && pop) pop.setTriggerTarget(el)
    return el
  }
})

export default TPopover
