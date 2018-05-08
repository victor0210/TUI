:::demo
> `trigger` 设置触发弹出层的方式，可选 `click`、`hover`、`focus`，默认为 `hover`
```html
<t-popover position="bottom">
  <t-button type="primary">hover</t-button>
  <div slot="popover">
    我是Hover弹出层
  </div>
</t-popover>
<t-popover position="bottom" trigger="click">
  <t-button type="primary">click</t-button>
  <div slot="popover">
    我是Click弹出层
  </div>
</t-popover>
<t-popover position="bottom" trigger="click" hide-on-click>
  <t-button type="primary">click on hide</t-button>
  <div slot="popover">
    点击外部区域也可以关闭哦
  </div>
</t-popover>
<t-popover position="bottom" trigger="focus">
  <t-button type="primary">focus</t-button>
  <div slot="popover">
    我是Focus弹出层
  </div>
</t-popover>
```
:::
