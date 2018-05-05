:::demo
> `percentage` 为进度量，类型为 `Number`，`status` 设置进度条状态，变化不同背景色，还可通过 `bar-fill` 属性设置，包括渐变色哦
```html
<t-progress/>
<t-progress :percentage="25"/>
<t-progress :percentage="50" status="success"/>
<t-progress :percentage="75" bar-fill="#ffcc00"/>
<t-progress :percentage="100" bar-fill="linear-gradient(to left, #ff9900, #ffcc00)"/>
<style scoped>
  .t-progress {
    margin-bottom: 10px;
  }
</style>
```
:::
