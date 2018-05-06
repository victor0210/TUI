:::demo
> 添加 `hide-on-click` 点击菜单item后自动关闭下拉菜单，默认为 `false`
```html
<t-dropdown hide-on-click>
  <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
  <template slot="dropdown">
    <t-dropdown-item disabled>中秋活动</t-dropdown-item>
    <t-dropdown-item>春节活动</t-dropdown-item>
    <t-dropdown-item>元旦活动</t-dropdown-item>
    <t-dropdown-item divided>五一活动</t-dropdown-item>
  </template>
</t-dropdown>
```
:::
