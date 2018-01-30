:::demo
```html
<t-row :gutter="20">
  <t-col :span="8">
    <t-input placeholder="请输入" prependIcon="fa fa-calendar">
      <p slot="prefix">calendar</p>
    </t-input>
  </t-col>
  <t-col :span="8">
    <t-input placeholder="请输入" prefixIcon="fa fa-search">
      <t-button slot="suffix">搜索</t-button>
    </t-input>
  </t-col>
  <t-col :span="8">
    <t-input placeholder="请输入">
      <t-button slot="suffix" type="primary" icon="fa fa-search"></t-button>
      <t-button slot="suffix" type="danger" icon="fa fa-eraser"></t-button>
    </t-input>
  </t-col>
</t-row>
```
:::