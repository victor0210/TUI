import Vue from 'vue'
import Popover from '../components/popover/index'
import PopoverBus from '../utils/popoverBus'
let Popovers = {}

const TPopover = Vue.directive('t-popover', {
  inserted (el, value) {
    const popoverEl = document.querySelectorAll(`[target=${value.arg}]`)[0]

    let pop = PopoverBus.get()[value.arg]

    let popoverComponent = new Vue({
      render (h) {
        return h(Popover, {
          props: pop.props,
          on: {
            input: (val) => {
              console.log('watch', val)
              this.$emit('input', val)
            }
          }
        }, [
          h('span', {
            slot: 'popover',
            domProps: {
              innerHTML: popoverEl.innerHTML
            }
          })
        ])
      }
    }).$mount()

    Popovers[value.arg] = popoverComponent
    el.parentNode.appendChild(popoverComponent.$el)
    popoverComponent.$el.appendChild(el)
  },
  update (el, value) {
    Popovers[value.arg].$forceUpdate()
  }
})

export default TPopover
