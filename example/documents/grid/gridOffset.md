:::demo
> 通过设置 `t-col` 的 `offset` 属性来指定区块的偏移列数，类型为 `Number` 
```html
<t-row :gutter="20">
  <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="4" :offset="4"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="4" :offset="4"><div class="grid-content bg-primary-lighter"></div></t-col>
</t-row>

<t-row :gutter="20">
  <t-col :span="6" :offset="4"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="4" :offset="4"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>

<t-row :gutter="20">
  <t-col :span="12" :offset="6"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>
```
:::
