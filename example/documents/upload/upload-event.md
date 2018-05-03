::: demo
> `before-upload` 为上传前验证，`before-remove` 为删除前验证，返回 `true` 为验证通过，`false` 既为验证失败，后续操作将会被中断；`on-remove` 方法捕获文件删除事件，`on-file-list-change` 方法捕获文件列表变化事件
```html
<t-upload action="http://upload.test/index.php"
          :before-upload="beforeUpload"
          :before-remove="beforeRemove"
          :on-remove="onRemove"
>
  <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
  <template slot="tip">
    Tips: 自定义限制只能上传两个文件
  </template>
</t-upload>

<script>
export default {
  methods: {
    beforeUpload (fileList, tfile) {
      if (fileList.length < 2) {
        this.$TMessage.show({
          title: '验证通过',
          type: 'success',
          showIcon: true
        })

        return true
      } else {
        this.$TMessage.show({
          title: '验证未通过',
          type: 'danger',
          showIcon: true
        })

        return false
      }
    },

    beforeRemove (fileList, tfile) {
      if (fileList.length > 1) {
        return true
      } else {
        this.$TMessage.show({
          title: '文件删除前验证失败',
          type: 'danger',
          showIcon: true
        })
        return false
      }
    },

    onRemove (fileList, tfile) {
      this.$TMessage.show({
        title: '文件删除成功',
        type: 'success',
        showIcon: true
      })
    },
    
    onFileListChange (fileList) {
      console.log('fileList change')
    }
  }
}
</script>
```
:::
