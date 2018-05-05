::: demo
> `$TMessage` 挂载在全局Vue对象，使用非常简单，只需调用用 `show` 方法传入config参数即可，参数详情见网站底部说明
```html
<t-button @click="open(c9)">success</t-button>

<script>
export default {
  data () {
    return {
      c9: {
        content: '欢迎来到TUI',
        sub: 'there is the sub description',
        type: 'info'
      }
    }
  },
  methods: {
    open (opt) {
      this.$TMessage.show(opt)
    }
  }
}
</script>
```
:::
