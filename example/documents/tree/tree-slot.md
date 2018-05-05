::: demo
> 自定义内容将会被浮动到右侧
```html
<t-tree :data="data" ref="tree2">
  <template slot-scope="{node}">
    <t-button type="text" size="sm" @click="append(node)">append</t-button>
    <t-button type="text" size="sm" @click="remove(node)">remove</t-button>
  </template>
</t-tree>
<script>
export default {
  methods: {
    append (node) {
      this.$refs.tree2.append(node, {
        label: `append-${~~(Math.random() * 10000)}`,
        id: 32
      })
    },
    remove (node) {
      this.$refs.tree2.remove(node)
    }
  },
  data () {
    return {
      filterText: '',
      data: [{
        label: '一级 1',
        id: 1,
        children: [{
          id: 2,
          label: '二级 1-1',
          children: [{
            id: 3,
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1',
            id: 4
          }, {
            label: '三级 3-1-2',
            id: 6
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }, {
            label: '三级 3-2-2'
          }]
        }]
      }]
    }
  }
}
</script>
```
:::
