:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group>
    <t-checkbox label="默认" val="1"></t-checkbox>
    <t-checkbox label="默认选中" :checked="true" val="2"></t-checkbox>
    <t-checkbox label="禁用" :disabled="true" val="3"></t-checkbox>
    <t-checkbox label="禁用并选用" :checked="true" :disabled="true" val="4"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
```
:::