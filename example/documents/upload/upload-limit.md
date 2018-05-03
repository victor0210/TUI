::: demo
> 设置属性 `limit` 限制文件上传个数，类型为 `Number`，`on-exceed` 为文件上传超出时触发
```html
<t-upload action="http://upload.test/index.php"
  :limit="2"
  :on-exceed="onExceed"
>
  <t-button icon="fa fa-cloud-upload-alt" type="sm">上传</t-button>
  <template slot="tip">
    Tips: 最多上传2个文件
  </template>
</t-upload>

<script>
export default {
  methods: {
    onExceed (tfile) {
      console.log('文件列表个数超出', tfile)
    }
  }
}
</script>
```
:::
