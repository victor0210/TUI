:::demo
> 将 `type` 属性赋值为 `flex`，可以启用 flex 布局，并可通过 `justify` 属性来指定 `start` 、 `center` 、 `end` 、 `space-between` 和 `space-around` 来定义子元素的排版方式。 
```html
<t-row type="flex" class="row-bg">
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>

<t-row type="flex" class="row-bg" justify="center">
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>

<t-row type="flex" class="row-bg" justify="end">
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>

<t-row type="flex" class="row-bg" justify="space-between">
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>

<t-row type="flex" class="row-bg" justify="space-around">
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-primary-light"></div></t-col>
</t-row>
```
:::
