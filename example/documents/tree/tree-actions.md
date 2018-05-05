::: demo
> 下面是通过组件方法用代码进行操作的demo
```html
<t-row>
  <t-col :span="24">
    <t-tree show-checkbox :data="data" node-key="id" :expand-nodes="[1, 2]" :checked-node="[4]" ref="tree"/>
  </t-col>
  
  <t-col :span="24">
    <t-button @click="getCheckNodes">获取node</t-button>
    <t-button @click="getCheckKeys">获取key</t-button>
    <t-button @click="setCheckNodes">通过node设置</t-button>
    <t-button @click="reset">重置</t-button>
  </t-col>
</t-row>

<script>
export default {
  methods: {
    getCheckNodes () {
      console.log(this.$refs.tree.getCheckNodes())
    },
    getCheckKeys () {
      console.log(this.$refs.tree.getCheckKeys())
    },
    setCheckNodes () {
      this.$refs.tree.setCheckNodes([1, 2])
    },
    reset () {
      this.$refs.tree.resetCheckNodes()
    }
  },
  data () {
    return {
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
        id: 4,
        children: [{
          label: '二级 2-1',
          id: 5,
          children: [{
            label: '三级 2-1-1',
            id: 6
          }]
        }, {
          label: '二级 2-2',
          id: 7,
          children: [{
            label: '三级 2-2-1',
            id: 8
          }]
        }]
      }, {
        label: '一级 3',
        id: 9,
        children: [{
          label: '二级 3-1',
          id: 10,
          children: [{
            label: '三级 3-1-1',
            id: 11
          }]
        }, {
          label: '二级 3-2',
          id: 12,
          children: [{
            label: '三级 3-2-1',
            id: 13
          }, {
            label: '三级 3-2-2',
            id: 14
          }]
        }]
      }]
    }
  }
}
</script>
```
:::
