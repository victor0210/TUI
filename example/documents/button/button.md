::: demo
> 使用 `type` 、`outline` 、`round` 和 `circle` 属性来定义按钮的样式，可组合使用。
```html
<div class="row">
  <div class="col" :span="24">
    <t-button type="primary">Primary</t-button>
    <t-button type="success">Success</t-button>
    <t-button type="info">Info</t-button>
    <t-button type="warning">Warning</t-button>
    <t-button type="danger">Danger</t-button>
    <t-button>Default</t-button>
  </div>
  
  <div class="col" :span="24" style="margin-top: 20px">
    <t-button type="primary" outline>Primary</t-button>
    <t-button type="success" outline>Success</t-button>
    <t-button type="info" outline>Info</t-button>
    <t-button type="warning" outline>Warning</t-button>
    <t-button type="danger" outline>Danger</t-button>
    <t-button outline>Default</t-button>
  </div>
  
  <div class="col" :span="24" style="margin-top: 20px">
    <t-button type="primary" round>Primary</t-button>
    <t-button type="success" round>Success</t-button>
    <t-button type="info" round>Info</t-button>
    <t-button type="warning" round>Warning</t-button>
    <t-button type="danger" round>Danger</t-button>
    <t-button round>Default</t-button>
  </div>
  
  <div class="col" :span="24" style="margin-top: 20px">
    <t-button type="primary" circle icon="fa fa-search"/>
    <t-button type="success" circle icon="fa fa-check"/>
    <t-button type="info" circle icon="fa fa-envelope"/>
    <t-button type="warning" circle icon="fa fa-star"/>
    <t-button type="danger" circle icon="fa fa-trash-alt"/>
  </div>
</div>
```
:::
