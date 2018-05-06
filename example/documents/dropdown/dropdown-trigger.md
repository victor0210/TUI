:::demo
> `trigger` 为触发显示下拉菜单方式，`click` 为点击触发，默认为 `hover`
```html
<div class="half">
  <t-divider content="Click触发" content-align="left"/>
  <t-dropdown trigger="click">
    <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
    <template slot="dropdown">
      <t-dropdown-item disabled>中秋活动</t-dropdown-item>
      <t-dropdown-item>春节活动</t-dropdown-item>
      <t-dropdown-item>元旦活动</t-dropdown-item>
      <t-dropdown-item divided>五一活动</t-dropdown-item>
    </template>
  </t-dropdown>
</div>

<div class="half">
  <t-divider content="Hover触发" content-align="left"/>
  <t-dropdown>
    <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
    <template slot="dropdown">
      <t-dropdown-item disabled>中秋活动</t-dropdown-item>
      <t-dropdown-item>春节活动</t-dropdown-item>
      <t-dropdown-item>元旦活动</t-dropdown-item>
      <t-dropdown-item divided>五一活动</t-dropdown-item>
    </template>
  </t-dropdown>
</div>
```
:::
