<script>
import TCheckbox from '../../components/checkbox/index'
import ArrayHelper from '../../mixins/arrayHelper'
import Emitter from '../../mixins/emitter'

export default {
  components: {
    TCheckbox
  },

  mixins: [Emitter, ArrayHelper],

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
    if (this.col.type === 'expand') {
      return h('div', {
        class: 't-table__cell t-table__expand-trigger',
        style: {
          width: '40px'
        },
        on: {
          click: () => {
            this.dispatch('t-table', 'table-toggle-expand', this.idx)
          }
        }
      }, [h('i', {
        class: [
          'fa', 'fa-caret-right'
        ]
      })])
    } else if (this.col.$scopedSlots.default) {
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
      return h('div', {
        class: 't-table__cell',
        style: {
          width: this.width
        }
      }, [this.col.type === 'index' ? (this.idx + 1) : this.row[this.col.prop]])
    }
  }
}
</script>

<style scoped>

</style>
