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
</div>

::: demo
```html
<t-button type="primary" size="lg" :disabled="true">primary</t-button>
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

## 按钮 - round, disabled(正常样式和outline下的disabled样式一样), outline
<div class="demo-block">
<t-button type="primary" size="lg" :round=true>primary</t-button>
<t-button type="cyan" size="lg" :round=true>cyan</t-button>
<t-button type="warning" size="lg" :round=true>warning</t-button>
<t-button type="danger" :round=true>danger</t-button>
<t-button type="inverse" :round=true>inverse</t-button>
<br>
<br>
<t-button type="primary" size="lg" :round=true :disabled=true>primary</t-button>
<t-button type="cyan" size="lg" :round=true :disabled=true>cyan</t-button>
<t-button type="warning" size="lg" :round=true :disabled=true>warning</t-button>
<t-button type="danger" :round=true :disabled=true>danger</t-button>
<t-button type="inverse" :round=true :disabled=true>inverse</t-button>
<br>
<br>
<t-button type="primary" size="lg" :round=true :outline=true>primary</t-button>
<t-button type="cyan" size="lg" :round=true :outline=true>cyan</t-button>
<t-button type="warning" size="lg" :round=true :outline=true>warning</t-button>
<t-button type="danger" :round=true :outline=true>danger</t-button>
<t-button type="inverse" :round=true :outline=true>inverse</t-button>
</div>

::: demo
```html
<t-button type="primary" size="lg" :round=true>primary</t-button>
<t-button type="cyan" size="lg" :round=true>cyan</t-button>
<t-button type="warning" size="lg" :round=true>warning</t-button>
<t-button type="danger" :round=true>danger</t-button>
<t-button type="inverse" :round=true>inverse</t-button>

<t-button type="primary" size="lg" :round=true :disabled=true>primary</t-button>
<t-button type="cyan" size="lg" :round=true :disabled=true>cyan</t-button>
<t-button type="warning" size="lg" :round=true :disabled=true>warning</t-button>
<t-button type="danger" :round=true :disabled=true>danger</t-button>
<t-button type="inverse" :round=true :disabled=true>inverse</t-button>

<t-button type="primary" size="lg" :round=true :outline=true>primary</t-button>
<t-button type="cyan" size="lg" :round=true :outline=true>cyan</t-button>
<t-button type="warning" size="lg" :round=true :outline=true>warning</t-button>
<t-button type="danger" :round=true :outline=true>danger</t-button>
<t-button type="inverse" :round=true :outline=true>inverse</t-button>
```
:::

## 按钮组
<div class="demo-block">
<t-button-group>
<t-button type="primary" :outline=true size="lg">btn1</t-button>
<t-button type="cyan" size="lg">btn2</t-button>
<t-button type="danger" size="lg">btn3</t-button>
</t-button-group>
<t-button-group>
<t-button type="warning">btn1</t-button>
<t-button type="inverse">btn2</t-button>
</t-button-group>
</div>

::: demo
```html
<t-button-group>
<t-button type="primary">btn1</t-button>
<t-button type="cyan">btn2</t-button>
<t-button type="danger">btn3</t-button>
</t-button-group>
<t-button-group>
<t-button type="warning">btn1</t-button>
<t-button type="inverse">btn2</t-button>
</t-button-group>
```
:::

## 图标按钮
<div class="demo-block">
<t-button type="primary" icon="fa fa-spinner fa-pulse">spinner</t-button>
<t-button type="cyan" icon="fa fa-asterisk fa-spin">asterisk</t-button>
<t-button type="warning" icon="fa fa-circle-notch fa-spin">circle-notch</t-button>
<t-button type="danger" icon="fa fa-sync fa-spin">sync</t-button>
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

## 普通输入框
<div class="demo-block">
  <t-row :gutter="20">
    <t-col :span="5"><t-input placeholder="请输入"/></t-col>
  </t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="5"><t-input placeholder="请输入"/></t-col>
</t-row>
```
:::

## 设置宽度
<div class="demo-block">
  <t-row :gutter="20">
    <t-col :span="8"><t-input placeholder="请输入" :width="100"/></t-col>
    <t-col :span="8"><t-input placeholder="请输入" :width="200"/></t-col>
    <t-col :span="8"><t-input placeholder="请输入" :width="300"/></t-col>
  </t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="8"><t-input placeholder="请输入" :width="100"/></t-col>
  <t-col :span="8"><t-input placeholder="请输入" :width="200"/></t-col>
  <t-col :span="8"><t-input placeholder="请输入" :width="300"/></t-col>
</t-row>
```
:::

## 组合按钮
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="5">
    <t-input placeholder="default">
      <t-button slot="suffix" icon="fa fa-search">
    </t-input>
  </t-col>
  <t-col :span="5">
    <t-input placeholder="primary">
      <t-button slot="suffix" type="primary" icon="fa fa-search">
    </t-input>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="5">
    <t-input placeholder="default">
      <t-button slot="suffix" icon="fa fa-search">
    </t-input>
  </t-col>
  <t-col :span="5">
    <t-input placeholder="primary">
      <t-button slot="suffix" type="primary" icon="fa fa-search">
    </t-input>
  </t-col>
</t-row>
```
:::


## 组合文字图标
<div class="demo-block">
  <t-row :gutter="20">
   <t-col :span="8">
     <t-input placeholder="请输入">
       <p slot="prefix">www.</p>
     </t-input>
   </t-col>
   <t-col :span="8">
     <t-input placeholder="请输入">
       <i slot="suffix" class="fa fa-circle-notch fa-spin">
     </t-input>
   </t-col>
   <t-col :span="8">
     <t-input placeholder="请输入">
       <p slot="prefix">http://</p>
       <p slot="suffix">.com</p>
     </t-input>
   </t-col>
  </t-row>
</div>

:::demo
```html
<t-row :gutter="20">
 <t-col :span="8">
   <t-input placeholder="请输入">
     <p slot="prefix">www.</p>
   </t-input>
 </t-col>
 <t-col :span="8">
   <t-input placeholder="请输入">
     <i slot="suffix" class="fa fa-circle-notch fa-spin">
   </t-input>
 </t-col>
 <t-col :span="8">
   <t-input placeholder="请输入">
     <p slot="prefix">http://</p>
     <p slot="suffix">.com</p>
   </t-input>
 </t-col>
</t-row>
```
:::


## 任意组合 
<div class="demo-block">
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
</div>

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


## Checkbox
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="8">
    <t-checkbox label="label在右边"></t-checkbox>
    <t-checkbox label="label在左边" :labelLeft=true></t-checkbox>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="8">
    <t-checkbox label="label在右边" v-model="value"></t-checkbox> //value is a boolean
    <t-checkbox label="label在左边" :labelLeft=true></t-checkbox>
  </t-col>
</t-row>
```
:::

## Checkbox-Group
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="8">
    <t-checkbox-group>
    <t-checkbox label="北京"></t-checkbox>
    <t-checkbox label="上海"></t-checkbox>
    <t-checkbox label="成都"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="8">
    <t-checkbox-group v-model="value">  //value is an array like ['Beijing','Shanghai']
      <t-checkbox label="北京" val="Beijing"></t-checkbox>
      <t-checkbox label="上海" val="Shanghai"></t-checkbox>
      <t-checkbox label="成都" val="Chengdu"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
```