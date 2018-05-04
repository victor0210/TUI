:::demo
> 设置 `layout` 属性改变表单布局，可设置在 `form` 组件上或者分别设置在 `form-item` 上，如果两者同时设置，form-item上的设置会覆盖掉form上的设置，类型为 `String`，可选值 `左对齐（不填）` 、 `right（右对齐）` 、 `oneline（行内排列）` 、 `vertical（竖直排列）`
```html
<div class="half" style="height: 400px">
  <t-divider content="设置form-item" content-align="left"/>
  <t-form>
    <t-form-item label="姓名:" :layout="style">
      <t-input/>
    </t-form-item>

    <t-form-item label="年龄:" :layout="style">
      <t-input/>
    </t-form-item>

    <t-form-item :layout="style">
      <t-button type="primary">提交</t-button>
    </t-form-item>
  </t-form>
</div>

<div class="half" style="height: 400px">
  <t-divider content="设置form" content-align="left"/>
  <t-form :layout="style">
    <t-form-item label="覆盖了父级样式:" layout="vertical">
      <t-input/>
    </t-form-item>

    <t-form-item label="年龄:">
      <t-input/>
    </t-form-item>

    <t-form-item>
      <t-button type="primary">提交</t-button>
    </t-form-item>
  </t-form>
</div>
```
:::
