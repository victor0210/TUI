## 按钮



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

## 图标按钮
<div class="demo-block">
<t-button type="primary" icon="fa fa-spinner fa-pulse">spinner</t-button>
<t-button type="cyan" icon="fa fa-asterisk fa-spin">asterisk</t-button>
<t-button type="warning" icon="fa fa-circle-notch fa-spin">circle-notch</t-button>
<t-button type="danger" icon="fa fa-sync fa-spin">sync</t-button>
<br/>
<br/>
</div>

:::demo
```html
<t-button type="primary" icon="fa fa-spinner fa-pulse">spinner</t-button>
<t-button type="cyan" icon="fa fa-asterisk fa-spin">asterisk</t-button>
<t-button type="warning" icon="fa fa-circle-notch fa-spin">circle-notch</t-button>
<t-button type="danger" icon="fa fa-sync fa-spin">sync</t-button>
```
:::

## 栅格布局
<div class="demo-block">
<t-row>
  <t-col :span="24"><div class="grid-content bg-black"></div></t-col>
</t-row>
<t-row>
  <t-col :span="12"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="12"><div class="grid-content bg-gray-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="8"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-gray"></div></t-col>
</t-row>
<t-row>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
</t-row>
</div>

::: demo
```html
<div class="demo-block">
<t-row>
  <t-col :span="24"><div class="grid-content bg-black"></div></t-col>
</t-row>
<t-row>
  <t-col :span="12"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="12"><div class="grid-content bg-gray-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="8"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="8"><div class="grid-content bg-gray"></div></t-col>
</t-row>
<t-row>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray-light"></div></t-col>
</t-row>
<t-row>
  <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="4"><div class="grid-content bg-gray-light"></div></t-col>
</t-row>
</div>
```
:::

## 栅格布局-gutter
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
  <t-col :span="6"><div class="grid-content bg-gray"></div></t-col>
</t-row>
```
:::

## 提示框-dialog
<div class="demo-block">
<t-button type="success" @click="this.$Dialog.success">success</t-button>
<t-button type="info" @click="this.$Dialog.info">info</t-button>
<t-button type="warning" @click="this.$Dialog.warning">warning</t-button>
<t-button type="danger" @click="this.$Dialog.danger">danger</t-button>
</div>

:::demo
```html
<t-button type="success" @click="this.$Dialog.success">success</t-button>
<t-button type="info" @click="this.$Dialog.info">info</t-button>
<t-button type="warning" @click="this.$Dialog.warning">warning</t-button>
<t-button type="danger" @click="this.$Dialog.danger">danger</t-button>
```
:::
