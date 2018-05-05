::: demo
> `closable` 设置为 `false` 隐藏关闭按钮
```html
<t-button @click="success(c8)">隐藏关闭按钮</t-button>
<script>
export default {
  data () {
    return {
      c8: {
        closable: false,
        title: '维护通知',
        sub: '系统将于2018年8月8日晚 00:00 - 02:00 进行维护，届时将不能登录，很抱歉给您造成不便!'
      }
    }
  },
  methods: {
    success (opt) {
      this.$TNotify.success(opt)
    }
  }
}
</script>
```
:::
