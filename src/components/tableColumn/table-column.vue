<template><div></div></template>
<script>
import Emitter from '../../mixins/emitter'

export default {
  name: 't-table-column',

  mixins: [Emitter],

  props: {
    prop: String,
    label: {
      type: String,
      default: ''
    },
    width: {},
    fixed: Boolean,
    fixedRight: Boolean,
    data: {},
    sortMethod: Function,
    type: String
  },

  mounted () {
    this.dispatch('t-table', 'table-column-register', this)
  }
}
</script>

<style scoped>

</style>
