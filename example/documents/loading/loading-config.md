::: demo
> `show` 方法接收一个config参数，详情查阅网站底部参数表
```html
<t-button @click="show">开始加载</t-button>

<script>
export default {
  methods: {
    show () {
      this.$TLoading.show({
        contentBgColor: 'rgba(0, 0, 0, .3)',
        iconColor: '#fff',
        textColor: '#fff',
        maskBgColor: 'rgba(0, 0, 0, 0)',
        width: 120,
        height: 100,
        iconClass: 'fa fa-circle-notch fa-spin',
        iconSize: '2em',
        text: '拼命加载中...'
      })
      
      setTimeout(() => {
        this.$TLoading.hide()
      }, 3000)
    }
  }
}
</script>
```
:::
