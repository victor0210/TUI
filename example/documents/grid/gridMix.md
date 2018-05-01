:::demo
> 可按为单位随意设置 `t-col` 的 `span` ，填满整行只需总和为 `24` 即可 
```html
<t-row :gutter="20">
  <t-col :span="2"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
</t-row>

<t-row :gutter="20">
  <t-col :span="14"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>

<t-row :gutter="20">
  <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="16"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>
```
:::
