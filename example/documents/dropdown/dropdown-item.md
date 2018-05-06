:::demo
> `disabled` 为不可点击，`divided` 为分割线
```html
<t-dropdown>
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
