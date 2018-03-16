<!--<template><div>-->
  <!--{{ row[col.prop] }}-->
  <!--{{ $scopedSlots.default({row: row}) }}-->
<!--</div></template>-->
<script>
export default {
  name: 't-table-cell',

  data () {
    return {
    }
  },

  props: {
    row: {},
    col: {},
    width: {}
  },

  render (h) {
    if (this.col.$scopedSlots.default) {
      return h('div', {
        class: 't-table__cell',
        style: {
          width: this.width
        }
      }, [this.col.$scopedSlots.default({
        row: this.row
      })])
    } else {
      return h('div', {
        class: 't-table__cell',
        style: {
          width: this.width
        }
      }, [this.row[this.col.prop]])
    }
  }
}
</script>

<style scoped>

</style>
