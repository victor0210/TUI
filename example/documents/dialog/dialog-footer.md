:::demo
> 组件一共提供两个方法属性，`onOk` 和 `onClose`，触发任意一个事件后组件都会关闭，如果希望点击后窗口不关闭，如：内容为比较复杂的表单需要多次验证时，建议使用 `Modal` 组件
```html
<t-button @click="showFooter">打开提示框</t-button>

<script>
export default {
  methods: {
    showFooter () {
      this.$TDialog.show({
        showFooter: true,
        content: 'Welcome to TUI !',
        onOk: () => {
          this.$TMessage.show({
            content: '点击了ok',
            type: 'info',
            showIcon: true
          })
        },
        onClose: () => {
          this.$TMessage.show({
            content: '点击了取消',
            type: 'warning',
            showIcon: true
          })
        }
      })
    }
  }
}
</script>
```
:::
