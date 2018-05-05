::: demo
> 下面是通过组件方法用代码进行操作的demo
```html
<t-input size="sm" v-model="filterText" placeholder="输入关键字"/>
<br>
<t-tree show-checkbox :data="data" node-key="id" :expand-nodes="[1, 2]" :checked-node="[4]" :filterText="filterText"/>

<script>
export default {
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
