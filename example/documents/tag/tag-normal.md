:::demo
> 设置 `type` 属性使用 TUI 预设标签样式，分别有 `默认`、`success`、`info`、`warning`、`danger` 
```html
<t-tag v-for="(t, idx) in tags" :key="idx" :type="t.type">{{ t.label }}</t-tag>

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
