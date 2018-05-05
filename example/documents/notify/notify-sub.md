::: demo
> `sub` 为通知详细文案
```html
<t-button @click="success(c7)">详细信息</t-button>
<script>
export default {
  data () {
    return {
      c7: {
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
