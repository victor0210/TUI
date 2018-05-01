::: demo
> `t-row` 为行组件，内部分为24个单位， `t-col` 为行内单位组件，通过设置 `span` 属性设置宽度，类型为 `Number`
```html
<t-row>
  <t-col :span="24"><div class="grid-content bg-primary"></div></t-col>
</t-row>

<t-row>
  <t-col :span="12"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="12"><div class="grid-content bg-primary-lighter"></div></t-col>
</t-row>

<t-row>
  <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>

<t-row>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
</t-row>

<t-row>
  <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-primary-lighter"></div></t-col>
</t-row>
```
:::
