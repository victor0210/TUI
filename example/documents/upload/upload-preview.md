::: demo
> 设置属性 `list-type` 为 `pic` 开启图片预览，`on-preview` 获取预览事件
```html
<t-upload action="http://upload.test/index.php"
          list-type="pic"
          accept="image/*"
          :on-preview="onPreview"
>
  <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
  <template slot="tip">
    Tips: 点击上传后的图片可放大预览
  </template>
</t-upload>

<script>
export default {
  methods: {
    onPreview (tfile) {
      console.log('preview:', tfile.file.name)
    }
  }  
}
</script>
```
:::
