::: demo
> `$TMessage` 挂载在全局Vue对象，使用非常简单，只需调用用 `show` 方法传入config参数即可，参数详情见网站底部说明
```html
<t-button @click="open(c5)">success</t-button>
<t-button @click="open(c6)">info</t-button>
<t-button @click="open(c7)">warning</t-button>
<t-button @click="open(c8)">danger</t-button>

<script>
export default {
  data () {
    return {
      c5: {
        type: 'success',
        showIcon: true,
        closable: true
      },
      c6: {
        type: 'info',
        showIcon: true,
        closable: true
      },
      c7: {
        type: 'warning',
        showIcon: true,
        closable: true
      },
      c8: {
        type: 'danger',
        showIcon: true,
        closable: true
      },
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
