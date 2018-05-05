::: demo
> `$TMessage` 挂载在全局Vue对象，使用非常简单，只需调用用 `show` 方法传入config参数即可，参数详情见网站底部说明
```html
<t-button @click="open(c11)">success</t-button>

<script>
export default {
  data () {
    return {
      c11: {
        type: 'info',
        showIcon: true,
        textCenter: true
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
