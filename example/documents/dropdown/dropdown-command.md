:::demo
> item上添加 `command` 属性透传参数，dropdown组件上添加`command`事件捕获点击回传的command参数
```html
<t-dropdown hide-on-click @command="commandHandler">
  <t-button type="primary" icon="fa fa-chevron-down" icon-right>下拉菜单</t-button>
  <template slot="dropdown">
    <t-dropdown-item command="中秋活动">中秋活动</t-dropdown-item>
    <t-dropdown-item command="春节活动">春节活动</t-dropdown-item>
    <t-dropdown-item command="元旦活动">元旦活动</t-dropdown-item>
    <t-dropdown-item divided command="五一活动">五一活动</t-dropdown-item>
  </template>
</t-dropdown>
```
:::
