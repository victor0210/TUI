## 按钮
<div class="demo-block">
<t-button type="primary" size="lg">primary</t-button>
<t-button type="cyan" size="lg">cyan</t-button>
<t-button type="warning" size="lg">warning</t-button>
<t-button type="danger">danger</t-button>
<t-button type="success">success</t-button>
<t-button type="info">info</t-button>
<t-button type="inverse" size="sm">inverse</t-button>
<t-button size="sm">default</t-button>
<t-button type="text" size="sm">text</t-button>
<br/>
<br/>
</div>

::: demo
```html
<t-button type="primary" size="lg">primary</t-button>
<t-button type="cyan" size="lg">cyan</t-button>
<t-button type="warning" size="lg">warning</t-button>
<t-button type="danger">danger</t-button>
<t-button type="success">success</t-button>
<t-button type="info">info</t-button>
<t-button type="inverse" size="sm">inverse</t-button>
<t-button size="sm">default</t-button>
<t-button type="text" size="sm">text</t-button>
```
:::

## 栅格布局
<div class="demo-block">
<t-row>
  <t-col :span="24"><div class="grid-content bg-inverse"></div></t-col>
</t-row>
<t-row>
  <t-col :span="12"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="12"><div class="grid-content bg-cyan-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="8"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-cyan"></div></t-col>
</t-row>
<t-row>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="4"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan-light"></div></t-col>
</t-row>
</div>

::: demo
```html
<div class="demo-block">
<t-row>
  <t-col :span="24"><div class="grid-content bg-inverse"></div></t-col>
</t-row>
<t-row>
  <t-col :span="12"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="12"><div class="grid-content bg-cyan-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="8"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-cyan"></div></t-col>
</t-row>
<t-row>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="4"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-cyan-light"></div></t-col>
</t-row>
</div>
```
:::

## 栅格布局-gutter
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-cyan"></div></t-col>
</t-row>
```
