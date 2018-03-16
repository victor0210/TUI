<template><div></div></template>
<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-table-column',

  mixins: [Emitter],

  // render (h) {
  //   if (this.$scopedSlots.default) {
  //     return h('div', this.$scopedSlots.default({
  //       humengtao: 123321
  //     }))
  //   } else {
  //     return h('div', '')
  //   }
  // },

  props: {
    prop: String,
    label: {
      type: String,
      default: ''
    },
    width: {},
    fixed: Boolean,
    fixedRight: Boolean,
    data: {}
  },

  mounted () {
    console.log(this)
    this.dispatch('t-table', 'table-column-register', this)
  }
}
</script>

<style scoped>

</style>
