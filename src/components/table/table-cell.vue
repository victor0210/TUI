<!--<template><div>-->
  <!--{{ row[col.prop] }}-->
  <!--{{ $scopedSlots.default({row: row}) }}-->
<!--</div></template>-->
<script>
import TCheckbox from '../../components/checkbox/index'

export default {
  components: {
    TCheckbox
  },

  name: 't-table-cell',

  data () {
    return {
    }
  },

  props: {
    row: {},
    col: {},
    idx: {},
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
        row: this.row,
        idx: this.idx
      })])
    } else {
      if (this.col.type === 'selection') {
        return h('div', {
          class: 't-table__cell',
          style: {
            width: this.width
          }
        }, [h(TCheckbox)])
      } else {
        return h('div', {
          class: 't-table__cell',
          style: {
            width: this.width
          }
        }, [this.col.type === 'index' ? (this.idx + 1) : this.row[this.col.prop]])
      }
    }
  }
}
</script>

<style scoped>

</style>
