::: demo
> 属性 `action` 必填，为上传地址，类型为 `String` ，通过 `on-upload-success` 和 `on-upload-error` 捕获上传成功或者失败（TUI封装了一组ajax相应对象，如果您觉得还不够，可以直接处理第三个原生xhr对象），组件内嵌任意元素可触发文件选择，添加 `tip slot` 可设置上传组件的tip
```htmlreject
<t-upload action="http://upload.test/index.php"
          :on-upload-success="uploadSuccess"
          :on-upload-error="uploadError"
>
  <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
  <template slot="tip">
    Tips: 可上传任意文件
  </template>
</t-upload>

<script>
export default {
  methods: {
    uploadSuccess (resp, tfile, xhr) {
      console.log(resp, 'success')
    },

    uploadError (err, tfile, xhr) {
      console.log(err, 'error')
    }    
  }
}
</script>
```
:::
