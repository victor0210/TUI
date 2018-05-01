:::demo
> 同bootstrap，一共设置了五种屏幕响应尺寸，分别是 `xs` 、`sm` 、`md` 、`lg` 和 `xl`
```html
<t-row :gutter="20">
  <t-col :xs="24" :sm="12" :md="6" :lg="4" :xl="2" style="margin-bottom: 20px"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :xs="24" :sm="12" :md="6" :lg="8" :xl="10" style="margin-bottom: 20px"><div class="grid-content bg-primary-lighter"></div></t-col>
  <t-col :xs="24" :sm="12" :md="6" :lg="8" :xl="10" style="margin-bottom: 20px"><div class="grid-content bg-primary-light"></div></t-col>
  <t-col :xs="24" :sm="12" :md="6" :lg="4" :xl="2" style="margin-bottom: 20px"><div class="grid-content bg-primary-lighter"></div></t-col>
</t-row>
```
:::
