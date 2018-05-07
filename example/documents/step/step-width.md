::: demo
> `flex-basis` 设置步骤内容宽度，类型为 `String`
```html
<t-step :steps="stepsWithIcon" :active="2" flex-basis="200px"/>

<script>
export default {
  data () {
    return {
      stepsWithIcon: [
        {
          title: '步骤 1',
          desc: '很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字很长的第一段描述文字...',
          icon: 'fa fa-file'
        },
        {
          title: '步骤 2',
          desc: '很长的第一段描述文字很长的第一段描述文字...',
          icon: 'fa fa-cloud-upload-alt'
        },
        {
          title: '步骤 3',
          desc: '比较短了哈哈',
          icon: 'fa fa-check-circle'
        }
      ]
    }
  }
}
</script>
```
:::
