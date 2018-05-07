::: demo
> `status` 为进度条状态，可选
```html
<t-step :steps="steps" :active="2"/>
<t-step :steps="steps" :active="2" status="info"/>
<t-step :steps="steps" :active="2" status="success"/>
<t-step :steps="steps" :active="2" status="warning"/>
<t-step :steps="steps" :active="2" status="danger"/>

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
