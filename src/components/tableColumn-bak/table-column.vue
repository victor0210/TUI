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
    width: Number,
    fixed: Boolean,
    fixedRight: Boolean,
    // data: {},
    sortMethod: Function,
    type: String
  },

  created () {
    this.$on('table-resize',this.registerColumn)
  },

  mounted () {
    this.registerColumn()
  },

  methods: {
    registerColumn () {
      this.dispatch('t-table', 'table-column-register', this)
    }
  }
}
</script>

<style scoped>

</style>
