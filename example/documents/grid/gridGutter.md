:::demo
> 只需要为 `t-row` 组件设置 `gutter` 属性即可，类型为 `Number` 
```html
<t-row :gutter="20">
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
</t-row>

<t-row :gutter="40">
  <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>
```
:::
