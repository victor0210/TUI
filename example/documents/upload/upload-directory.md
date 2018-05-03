::: demo
> 添加 `webkitdirectory` 属性开启文件夹上传，因为此属性对浏览器要求比较高，使用时请查阅兼容性文档
```html
<t-upload action="http://upload.test/index.php" webkitdirectory>
  <t-button icon="fa fa-folder" type="sm">上传文件夹</t-button>
  <template slot="tip">
    Tips: 只能上传文件夹
  </template>
</t-upload>
</script>
```
:::
