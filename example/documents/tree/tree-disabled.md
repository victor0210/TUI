::: demo
> 在原始数据对应的节点上设置 `disabled` 为 `true` 即可
```html
<t-tree show-checkbox :data="data" node-key="id" :expand-nodes="[1, 2]" :checked-node="[4]"/>

<script>
export default {
  data () {
    return {
      data: [{
        label: '一级 1',
        id: 1,
        children: [{
          id: 2,
          label: '二级 1-1',
          disabled: true,
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
            id: 4,
            disabled: true
          }, {
            label: '三级 3-1-2',
            id: 6,
            disabled: true
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
