:::demo
> 设置 `text-inside` 开启文字内部显示，`width` 设置进度条宽度，`stroke-width` 设置进度条高度
```html
<t-progress :stroke-width="16" text-inside width="200px"/>
<t-progress :percentage="50" :stroke-width="16" text-inside width="250px"/>
<t-progress :percentage="100" :stroke-width="16" status="success" text-inside width="300px"/>

<style scoped>
  .t-progress {
    margin-bottom: 10px;
  }
</style>
```
:::
