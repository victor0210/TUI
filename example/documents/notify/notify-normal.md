::: demo
> `$TNotify` 挂载在全局Vue对象，使用非常简单，只需调用用 `show` 方法传入config参数即可，参数详情见网站底部说明
```html
<t-button @click="open(c1)">右上</t-button>
<t-button @click="open(c2)">左上</t-button>
<t-button @click="open(c3)">右下</t-button>
<t-button @click="open(c4)">左下</t-button>
<script>
export default {
  data () {
    return {
      c1: {
        title: '维护通知'
      },
      c2: {
        position: 'top-left',
        title: '维护通知'
      },
      c3: {
        position: 'bottom-right',
        title: '维护通知'
      },
      c4: {
        position: 'bottom-left',
        title: '维护通知'
      }
    }
  },
  methods: {
    open (opt) {
      this.$TNotify.show(opt)
    }
  }
}
</script>
```
:::
