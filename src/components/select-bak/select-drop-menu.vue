<template><div></div></template>
<script>
import Vue from 'vue'
import PositionHelper from '../../mixins/positionHelper'
import Emitter from '../../mixins/emitter'

export default {
  name: 't-select-bak-drop-menu',

  mixins: [PositionHelper, Emitter],

  props: {
    parent: {},
    Instance: null,
    isFocus: Boolean
  },

  mounted () {
    const _this = this
    const parent = this.parent
    const slots = this.parent.$slots.default
    let offsetLeft = this.getElementLeft(this.parent.$el)
    let offsetTop = this.getElementTop(this.parent.$el)
    let offsetHeight = this.parent.$el.offsetHeight

    const DropMenu = new Vue({
      data: {
        parent: parent
      },
      render (h) {
        return h('ul', {
          class: 't-select__list',
          ref: 'list',
          style: {
            'display': _this.isFocus ? 'block' : 'none'
          }
        }, [slots])
      }
    })

    const dropComponent = DropMenu.$mount()
    let list = dropComponent.$el
    document.body.appendChild(list)

    list.style.left = `${offsetLeft}px`
    list.style.top = `${offsetTop}px`
    list.style.marginTop = `${offsetHeight + 5}px`

    this.action(parent, 'select-bak-drop-register', list)
  }
}
</script>
