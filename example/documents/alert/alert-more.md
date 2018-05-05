::: demo
> `closable` 为 `false` 不显示关闭按钮，默认可关闭，`close-text` 自定义关闭触发文本代替关闭按钮，`close` 为关闭触发事件 
```html
<t-alert content="不可关闭的警告" :closable="false"/>
<t-alert content="自定义 close-text" type="warning" closeText="关闭"/>
<t-alert content="设置回调" type="danger" @close="closeHandler"/>

<script>
export default {
  methods: {
    closeHandler () {
      console.log('警告框被关闭')
    }
  }
}
</script>
```
:::
