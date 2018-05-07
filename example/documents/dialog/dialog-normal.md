:::demo
> `$TDialog` 绑定在全局Vue下，为单例模式，方法见底部文档
```html
<t-button @click="show">打开提示框</t-button>

<script>
export default {
  methods: {
    show () {
      this.$TDialog.show({
        content: 'Welcome to TUI !'
      })
    }
  }
}
</script>
```
:::
