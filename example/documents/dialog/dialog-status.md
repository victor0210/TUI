:::demo
> 调用状态方法 `success`、`info`、`warning`、`danger` 显示状态图标 
```html
<t-button type="success" @click="showSuccess">成功</t-button>
<t-button type="info" @click="showInfo">信息</t-button>
<t-button type="warning" @click="showWarning">警告</t-button>
<t-button type="danger" @click="showDanger">危险</t-button>

<script>
export default {
  methods: {
    showSuccess () {
      this.$TDialog.success({
        showFooter: true
      })
    },
    showInfo () {
      this.$TDialog.info({
        showFooter: true
      })
    },
    showDanger () {
      this.$TDialog.danger({
        showFooter: true
      })
    },
    showWarning () {
      this.$TDialog.warning({
        showFooter: true
      })
    }
  }
}
</script>
```
:::
