:::demo
> `t-dropdown` 组件内部 `slot-default` 为触发下拉元素，`slot-dropdown` 为下来组件内容，使用 `t-dropdown-item` 添加下拉列表内容
```html
<t-dropdown>
  <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
  <template slot="dropdown">
    <t-dropdown-item>中秋活动</t-dropdown-item>
    <t-dropdown-item>春节活动</t-dropdown-item>
    <t-dropdown-item>元旦活动</t-dropdown-item>
    <t-dropdown-item>五一活动</t-dropdown-item>
  </template>
</t-dropdown>
```
:::
