::: demo
> 使用 `lazy` 属性开启懒加载，`load` 传入数据加载方法，获取数据后请严格使用 `resolve` 回传数据，若数据为空请传 `[]`
```html
<t-tree :load="loadData" lazy :default-props="defaultProps"/>

<script>
export default {
  methods: {
    loadData(node, resolve) {
      //  可通过Ajax获取动态数据
      let data = [{
         'name': `动态加载数据一：${~~(Math.random * 10000)}`
       }, {
         'name': `动态加载数据二：${~~(Math.random * 10000)}`
       }]
      let c = node ? 1000 : 0
      setTimeout(() => {
        if (!node || node.nodeIndex.split('-').length < 4) {
          resolve(data)
        } else {
          resolve([])
        }
      }, c)
    }
  }
}
</script>
```
:::
