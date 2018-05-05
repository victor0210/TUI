::: demo
> `duration` 设置关闭时间，为0既永久显示，默认为 `3000`
```html
<t-button @click="open(c5)">1s</t-button>
<t-button @click="open(c6)">不关闭</t-button>
<script>
export default {
  data () {
    return {
      c5: {
        title: '维护通知',
        duration: 1000
      },
      c6: {
        title: '维护通知',
        duration: 0
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
