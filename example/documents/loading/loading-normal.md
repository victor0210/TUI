::: demo
> `$TLoading` 挂载在全局Vue对象上，设计模式为单例，使用非常简单，如下
```html
<t-button @click="show">开始加载</t-button>

<script>
export default {
  methods: {
    show () {
      this.$TLoading.show()
      setTimeout(() => {
        this.$TLoading.hide()
      }, 3000)
    }
  }
}
</script>
```
:::
