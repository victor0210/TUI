::: demo
> `$TMessage` 挂载在全局Vue对象，使用非常简单，只需调用用 `show` 方法传入config参数即可，参数详情见网站底部说明
```html
<t-button @click="open(c0)">default</t-button>
<t-button @click="open(c1)">success</t-button>
<t-button @click="open(c2)">info</t-button>
<t-button @click="open(c3)">warning</t-button>
<t-button @click="open(c4)">danger</t-button>

<script>
export default {
  data () {
    return {
      c0: {
        icon: 'fa fa-check',
        showIcon: true
      },
      c1: {
        type: 'success',
        showIcon: true
      },
      c2: {
        type: 'info',
        showIcon: true
      },
      c3: {
        type: 'warning',
        showIcon: true
      },
      c4: {
        type: 'danger',
        showIcon: true
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
