import Vue from 'vue'

const TPopover = Vue.directive('t-tooltip', {
  bind (el, binding, vnode) {
    let pop = vnode.context.$refs[binding.arg].$children[0]
    if (el && pop) pop.setTriggerTarget(el)
    return el
  }
})

export default TPopover
