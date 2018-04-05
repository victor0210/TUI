<script>
import TTreeItem from './tree-item.vue'
import Emitter from '../../mixins/emitter'

export default {
  components: {
    TTreeItem
  },

  mixins: [Emitter],

  name: 't-tree',

  data () {
    return {
      treeData: [],
      labelKey: 'label',
      childrenKey: 'children',
      findNode: null,

      //  user gotten
      checkedNodesCollection: [],
      checkedKeysCollection: []
    }
  },

  props: {
    data: Array,
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
    checkChange: Function,
    load: Function,
    lazy: Boolean,
    nodeKey: String,
    expandNode: Array,
    filterText: String,

    //  for check switch
    checkedNodes: Array
  },

  created () {
    this.$on('node-click', this.handleNodeClick)
    this.$on('check-change', this.handleCheckChange)
    this.$on('lazy-load', this.lazyLoad)
    this.$on('catch-checked-node', this.catchCheckedNode)
    this.$on('catch-node-by-index', this.catchFindNode)

    this.setPropKeys()
    this.initData()
    this.formatData()
  },

  render (h) {
    let getItems = (h, parent) => {
      const _this = this
      let arr = parent ? parent.children : (this.treeData || [])
      let items = []
      arr.forEach(function (el) {
        let children = []
        if (el.children) {
          children = getItems(h, el)
        }

        let item = h(TTreeItem, {
          props: {
            label: el[_this.labelKey],
            indent: `${_this.childIndent * (el.nodeIndex.split('-').length - 1)}px`,
            showCheckbox: _this.showCheckbox,
            lazy: _this.lazy,
            nodeIndex: el.nodeIndex,
            initChecked: el.initChecked,
            initExpand: el.initExpand,
            checkDisabled: el.disabled,
            nodeKeyValue: el[_this.nodeKey]
          },
          scopedSlots: {
            user: () => h('div', {
              class: 't-tree-item__suffix'
            }, _this.$scopedSlots.default({
              node: el
            }))
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
    initData () {
      if (this.lazy) {
        this.dynamicLoad()
      } else {
        this.treeData = this.data
      }
    },
    setPropKeys () {
      if (this.defaultProps['label']) this.labelKey = this.defaultProps['label']
      if (this.defaultProps['children']) this.childrenKey = this.defaultProps['children']
    },

    formatData (parent) {
      const _this = this
      const indexPrefix = parent ? `${parent.nodeIndex}-` : ''
      let data = parent ? parent.children : this.treeData
      data.forEach(function (el, idx) {
        let checked

        if (parent && parent.initChecked) {
          checked = parent.initChecked
        } else {
          checked = !!(_this.nodeKey && _this.checkedNode && _this.checkedNode.indexOf(el[_this.nodeKey]) !== -1)
        }

        el.nodeIndex = `${indexPrefix}${idx + 1}`
        el.initChecked = checked
        if (_this.nodeKey && _this.expandNode && _this.expandNode.indexOf(el[_this.nodeKey]) !== -1) {
          el.initExpand = true
        }
        if (el.children) _this.formatData(el)
      })

      return data
    },

    runLoad (node) {
      return new Promise(resolve => {
        setTimeout(() => {
          this.load(node, resolve)
        })
      })
    },

    async dynamicLoad (node) {
      let result = await this.runLoad(node)
      if (node) {
        this.treeData = this.appendNodeInTreeData(node, result)
        this.$forceUpdate()
      } else {
        this.treeData = result
      }
      return true
    },

    lazyLoad (node) {
      this.dynamicLoad(node).then(() => {
        node.loading = false
        node.loaded = true
      })
    },

    appendNodeInTreeData (node, children, parent) {
      const nodeIndex = node.nodeIndex
      let arr = parent ? parent.children : this.treeData
      const _this = this

      arr.some(function (el) {
        if (el.nodeIndex === nodeIndex) {
          el.initChecked = node.isChecked
          if (el.children) {
            el.children = [...el.children, ...children]
          } else {
            el.children = children
          }
          _this.formatData(el)
          return true
        }

        if (el.children) {
          el.children = _this.appendNodeInTreeData(node, children, el)
        }
      })

      return arr
    },

    removeNodeInTreeData (node, parent) {
      const nodeIndex = node.nodeIndex
      let arr = parent ? parent.children : this.treeData
      const _this = this

      arr.some(function (el, idx) {
        if (el.nodeIndex === nodeIndex) {
          arr.splice(idx, 1)
          return true
        }

        if (el.children) {
          el.children = _this.removeNodeInTreeData(node, el)
        }
      })

      return arr
    },

    handleNodeClick (data) {
      this.nodeClick && this.nodeClick(data)
    },

    handleCheckChange (data) {
      this.checkChange && this.checkChange(data)
    },

    getChecks () {
      this.checkedNodesCollection = []
      this.checkedKeysCollection = []
      this.broadcast('t-tree-item', 'get-checked-item')
    },

    getCheckNodes () {
      this.getChecks()
      return this.checkedNodesCollection
    },

    getCheckKeys () {
      this.getChecks()
      return this.checkedKeysCollection
    },

    setCheckNodes (keys) {
      this.broadcast('t-tree-item', 'set-checked-nodes', keys)
    },

    resetCheckNodes () {
      this.broadcast('t-tree-item', 'reset-checked-nodes')
    },

    catchCheckedNode (node) {
      this.checkedNodesCollection.push(this.customNode(node))
      this.checkedKeysCollection.push(this.customNode(node)[this.nodeKey])
    },

    customNode (node) {
      let n = {
        label: node.label
      }
      n[this.nodeKey] = node.nodeKeyValue

      return n
    },

    filter (key) {
      this.broadcast('t-tree-item', 'filter-node', key)
    },

    append (node, child) {
      this.findNodeByIndex(node.nodeIndex)
      const c = Array.isArray(child) ? child : [child]
      this.appendNodeInTreeData(this.findNode, c)
      this.$forceUpdate()
    },

    remove (node) {
      this.removeNodeInTreeData(node)
      this.$forceUpdate()
    },

    findNodeByIndex (nodeIndex) {
      this.broadcast('t-tree-item', 'find-node-by-index', nodeIndex)
    },

    catchFindNode (node) {
      this.findNode = node
    }
  },

  watch: {
    defaultProps () {
      this.setPropKeys()
      this.formatData()
    },
    data (val) {
      !this.lazy && (this.treeData = val)
    },
    treeData () {
      this.formatData()
    },
    filterText (val) {
      this.filter(val)
    }
  }
}
</script>

<style scoped>
</style>
