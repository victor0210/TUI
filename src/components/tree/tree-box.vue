<script>
import TreeItem from './tree-item.vue'

export default {
  name: 't-tree-box',
  props: {
    data: Array,
    labelKey: String,
    childrenKey: String
  },
  render (h) {
    return h(this.getItems(h))
  },
  methods: {
    getItems (h, parent) {
      const _this = this
      let arr = parent ? parent.children : this.data
      let items = []
      arr.forEach(function (el) {
        let children = []
        if (el.children) {
          children = _this.getItems(h, el)
        }
        let item = h(TreeItem, {
          label: el[_this.labelKey]
        }, children)
        items.push(item)
      })
    }
  }
}
</script>

<style scoped>

</style>
