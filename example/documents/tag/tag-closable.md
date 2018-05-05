:::demo
> 添加 `closeable` 属性显示标签关闭按钮 
```html
<t-tag v-for="(t, idx) in tags" closable :key="idx" :type="t.type">{{ t.label }}</t-tag>

<script>
export default {
  data () {
    return {
      tags: [
        {label: '主要'},
        {label: '成功', type: 'success'},
        {label: '信息', type: 'info'},
        {label: '警告', type: 'warning'},
        {label: '危险', type: 'danger'}
      ]
    }
  }
}
</script>
```
:::
