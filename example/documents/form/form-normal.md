:::demo
> `t-form` 嵌套 `t-form-item` 使用表单组件
```html
<t-form>
  <t-form-item label="姓名">
    <t-input/>
  </t-form-item>
  <t-form-item label="年龄">
    <t-input-number/>
  </t-form-item>
  <t-form-item label="电话">
    <t-input type="number"/>
  </t-form-item>
  <t-form-item label="城市">
    <t-checkbox-group>
      <t-checkbox label="上海" val="shanghai"/>
      <t-checkbox label="北京" val="beijing"/>
      <t-checkbox label="广州" val="guangzhou"/>
      <t-checkbox label="四川" val="sichuan"/>
    </t-checkbox-group>
  </t-form-item>
</t-form>
```
:::
