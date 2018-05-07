:::demo
> `position` 设置tabs布局，可选值为 `top`、`left`、`bottom`、`right`，注：pipe样式只支持 top 和 bottom布局
```html
<div class="panel" style="padding-bottom: 25px">
  <t-radio-group v-model="position">
    <t-radio label="top" val="top"/>
    <t-radio label="left" val="left"/>
    <t-radio label="bottom" val="bottom"/>
    <t-radio label="right" val="right"/>
  </t-radio-group>
</div>

<div class="panel" style="padding-bottom: 25px">
  <t-tabs :position="position" style="height: 200px;">
    <t-tab-panel title="旅游住店">
      <h3>旅游住店</h3>
    </t-tab-panel>
    <t-tab-panel title="美食餐饮">
      <h3>美食餐饮</h3>
    </t-tab-panel>
    <t-tab-panel title="娱乐服务">
      <h3>娱乐服务</h3>
    </t-tab-panel>
  </t-tabs>
</div>

<div class="panel" style="padding-bottom: 25px">
  <t-tabs :position="position" style="height: 200px;" type="box">
    <t-tab-panel title="旅游住店">
      <h3>旅游住店</h3>
    </t-tab-panel>
    <t-tab-panel title="美食餐饮">
      <h3>美食餐饮</h3>
    </t-tab-panel>
    <t-tab-panel title="娱乐服务">
      <h3>娱乐服务</h3>
    </t-tab-panel>
  </t-tabs>
</div>

<div class="panel" style="padding-bottom: 25px">
  <t-tabs :position="position" style="height: 200px;" type="pipe">
    <t-tab-panel title="旅游住店">
      <h3>旅游住店</h3>
    </t-tab-panel>
    <t-tab-panel title="美食餐饮">
      <h3>美食餐饮</h3>
    </t-tab-panel>
    <t-tab-panel title="娱乐服务">
      <h3>娱乐服务</h3>
    </t-tab-panel>
  </t-tabs>
</div>
```
:::
