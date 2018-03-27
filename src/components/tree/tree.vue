<script>
import TTreeItem from './tree-item.vue'

export default {
  components: {
    TTreeItem
  },
  name: 't-tree',

  props: {
    data: Array,
    labelKey: {
      type: String,
      default: 'label'
    },
    childrenKey: {
      type: String,
      default: 'children'
    },
    defaultProps: {
      default: () => {
        return {
          label: null,
          children: null
        }
      }
    },
    childIndent: {
      type: Number,
      default: 16
    },
    showCheckbox: Boolean,
    nodeClick: Function,
    checkChange: Function
  },

  created () {
    this.$on('node-click', this.handleNodeClick)
    this.$on('check-change', this.handleCheckChange)
    this.setPropKeys()
    this.formatData()
  },

  render (h) {
    let getItems = (h, parent) => {
      const _this = this
      let arr = parent ? parent.children : this.data

      let items = []
      arr.forEach(function (el) {
        let children = []
        if (el.children) {
          children = getItems(h, el)
        }
        let item = h(TTreeItem, {
          props: {
            label: el[_this.labelKey],
            indent: `${_this.childIndent * (el.treeIndex.split('-').length - 1)}px`,
            hasChildren: !!el.children,
            showCheckbox: _this.showCheckbox
          }
        }, children)
        items.push(item)
      })
      return items
    }

    return h('div', {
      class: 't-tree'
    }, getItems(h))
  },

  methods: {
    setPropKeys () {
      if (this.defaultProps['label']) this.labelKey = this.defaultProps['label']
      if (this.defaultProps['children']) this.childrenKey = this.defaultProps['children']
    },

    formatData (parent) {
      const _this = this
      const indexPrefix = parent ? `${parent.treeIndex}-` : ''
      let data = parent ? parent.children : this.data

      data.forEach(function (el, idx) {
        el.treeIndex = `${indexPrefix}${idx + 1}`
        if (el.children) _this.formatData(el)
      })
    },

    handleNodeClick (data) {
      this.nodeClick && this.nodeClick(data)
    },

    handleCheckChange (data) {
      this.checkChange && this.checkChange(data)
    }
  },

  watch: {
    defaultProps () {
      this.setPropKeys()
      this.formatData()
    }
  }
}
</script>

<style scoped>
</style>
