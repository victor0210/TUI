::: demo
> `steps` 为步骤条内容，详细配置建网站底部文档，`active` 为步骤进度，类型为 `Number`
```html
<t-step :steps="steps" :active="2"/>

<script>
export default {
  data () {
    return {
      steps: [
        {
          title: '步骤 1',
          desc: '很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字...',
          completeIcon: 'fa fa-check-circle'
        },
        {
          title: '步骤 2',
          desc: '很长的第一段描述文字很长的第一段描述文字...',
          completeIcon: 'fa fa-check-circle'
        },
        {
          title: '步骤 3',
          desc: '比较短了哈哈'
        }
      ]
    }
  }
}
</script>
```
:::
