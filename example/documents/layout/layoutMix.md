:::demo
> 可通过内嵌 `t-layout` 组件实现复杂的行列组合布局
```html
<t-layout flex-direction="column" style="margin-bottom: 50px">
  <t-header class="flex-content bg-primary">Header</t-header>
  <t-layout flex-direction="row" style="height: 150px">
    <t-aside class="flex-content bg-primary-lighter" width="200px">Left Side</t-aside>
    <t-content class="flex-content bg-primary-light">Content</t-content>
    <t-aside class="flex-content bg-primary-lighter" width="200px">Right Side</t-aside>
  </t-layout>
  <t-footer class="flex-content bg-primary">Footer</t-footer>
</t-layout>

<t-layout flex-direction="row">
  <t-aside class="flex-content bg-primary-lighter" width="200px">Left Side</t-aside>
  <t-layout flex-direction="column" style="height: 250px">
    <t-header class="flex-content bg-primary">Header</t-header>
    <t-content class="flex-content bg-primary-light">Content</t-content>
    <t-footer class="flex-content bg-primary">Footer</t-footer>
  </t-layout>
</t-layout>
```
:::
