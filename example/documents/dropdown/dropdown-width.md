:::demo
> 不设置`width`为自适应，设置为0既和触发元素宽度相同，类型为`Number`
```html
<div class="half">
  <t-divider content="与触发组件相同" content-align="left"/>
  <t-dropdown :width="0">
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
  <t-divider content="200px" content-align="left"/>
  <t-dropdown :width="200">
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
