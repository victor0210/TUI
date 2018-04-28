## 按钮

<div class="demo-block">
<t-button type="primary" size="lg">primary</t-button>
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
<t-button type="primary" size="lg" round>primary</t-button>
<t-button type="warning" size="lg" round>warning</t-button>
<t-button type="danger" round>danger</t-button>
<t-button type="inverse" round>inverse</t-button>
<br>
<br>
<t-button type="primary" size="lg" round disabled>primary</t-button>
<t-button type="warning" size="lg" round disabled>warning</t-button>
<t-button type="danger" round disabled>danger</t-button>
<t-button type="inverse" round disabled>inverse</t-button>
<br>
<br>
<t-button type="primary" size="lg" round outline>primary</t-button>
<t-button type="warning" size="lg" round outline>warning</t-button>
<t-button type="danger" round outline>danger</t-button>
<t-button type="inverse" round outline>inverse</t-button>
</div>

::: demo
```html
<t-button type="primary" size="lg" round>primary</t-button>
<t-button type="warning" size="lg" round>warning</t-button>
<t-button type="danger" round>danger</t-button>
<t-button type="inverse" round>inverse</t-button>

<t-button type="primary" size="lg" round disabled>primary</t-button>
<t-button type="warning" size="lg" round disabled>warning</t-button>
<t-button type="danger" round disabled>danger</t-button>
<t-button type="inverse" round disabled>inverse</t-button>

<t-button type="primary" size="lg" round outline>primary</t-button>
<t-button type="warning" size="lg" round outline>warning</t-button>
<t-button type="danger" round outline>danger</t-button>
<t-button type="inverse" round outline>inverse</t-button>
```
:::

## 按钮组
<div class="demo-block">
<t-button-group>
<t-button type="primary" outline size="lg">btn1</t-button>
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
<t-button type="warning" icon="fa fa-circle-notch fa-spin">circle-notch</t-button>
<t-button type="danger" icon="fa fa-sync fa-spin">sync</t-button>
</div>

:::demo
```html
<t-button type="primary" icon="fa fa-spinner fa-pulse">spinner</t-button>
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
<t-button type="success" @click="this.$TDialog.success">success</t-button>
<t-button type="info" @click="this.$TDialog.info">info</t-button>
<t-button type="warning" @click="this.$TDialog.warning">warning</t-button>
<t-button type="danger" @click="this.$TDialog.danger">danger</t-button>
</div>

:::demo
```html
<t-button type="success" @click="this.$TDialog.success">success</t-button>
<t-button type="info" @click="this.$TDialog.info">info</t-button>
<t-button type="warning" @click="this.$TDialog.warning">warning</t-button>
<t-button type="danger" @click="this.$TDialog.danger">danger</t-button>
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
    <t-checkbox label="label在右边"></t-checkbox> //value is a boolean
    <t-checkbox label="label在左边" :labelLeft=true></t-checkbox>
  </t-col>
</t-row>
```
:::

## Checkbox-Group attention:please giving val to t-checkbox which contains in t-checkbox-group
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="8">
    <t-checkbox-group>
      <t-checkbox label="北京" val="Beijing"></t-checkbox>
      <t-checkbox label="上海" val="Shanghai"></t-checkbox>
      <t-checkbox label="成都" val="Chengdu"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="8">
    <t-checkbox-group>  //value is an array like ['Beijing','Shanghai']
      <t-checkbox label="北京" val="Beijing"></t-checkbox>
      <t-checkbox label="上海" val="Shanghai"></t-checkbox>
      <t-checkbox label="成都" val="Chengdu"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
```
:::

## Checkbox-Styles
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group>
    <t-checkbox label="默认" val="1"></t-checkbox>
    <t-checkbox label="默认选中" :checked="true" val="2"></t-checkbox>
    <t-checkbox label="禁用" :disabled="true" val="3"></t-checkbox>
    <t-checkbox label="禁用并选用" :checked="true" :disabled="true" val="4"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group>
    <t-checkbox label="默认" val="1"></t-checkbox>
    <t-checkbox label="默认选中" :checked="true" val="2"></t-checkbox>
    <t-checkbox label="禁用" :disabled="true" val="3"></t-checkbox>
    <t-checkbox label="禁用并选用" :checked="true" :disabled="true" val="4"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
```
:::

## Checkbox-indeterminate
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group :indeterminate="true">
    <t-checkbox label="默认" val="1"></t-checkbox>
    <t-checkbox label="默认选中" :checked="true" val="2"></t-checkbox>
    <t-checkbox label="禁用" :disabled="true" val="3"></t-checkbox>
    <t-checkbox label="禁用并选用" :checked="true" :disabled="true" val="4"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group>
    <t-checkbox label="默认" val="1"></t-checkbox>
    <t-checkbox label="默认选中" :checked="true" val="2"></t-checkbox>
    <t-checkbox label="禁用" :disabled="true" val="3"></t-checkbox>
    <t-checkbox label="禁用并选用" :checked="true" :disabled="true" val="4"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
```
:::

## Checkbox-min=1 max=3
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group :min="1" :max="3">
    <t-checkbox label="西瓜" val='1'></t-checkbox>
    <t-checkbox label="苹果" val='2'></t-checkbox>
    <t-checkbox label="栗子" val='3'></t-checkbox>
    <t-checkbox label="香蕉" val='4'></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group :min="1" :max="3">
    <t-checkbox label="西瓜" val='1'></t-checkbox>
    <t-checkbox label="苹果" val='2'></t-checkbox>
    <t-checkbox label="栗子" val='3'></t-checkbox>
    <t-checkbox label="香蕉" val='4'></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
```
:::

## Checkbox-border
<div class="demo-block">
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group>
    <t-checkbox label="北京" val='1' :outbox="true"></t-checkbox>
    <t-checkbox label="上海" val='2' :outbox="true"></t-checkbox>
    <t-checkbox label="成都" val='3' :outbox="true"></t-checkbox>
    <t-checkbox label="广州" val='4' :outbox="true"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
</div>

:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox-group>
    <t-checkbox label="北京" val='1' :outbox="true"></t-checkbox>
    <t-checkbox label="上海" val='2' :outbox="true"></t-checkbox>
    <t-checkbox label="成都" val='3' :outbox="true"></t-checkbox>
    <t-checkbox label="广州" val='4' :outbox="true"></t-checkbox>
    </t-checkbox-group>
  </t-col>
</t-row>
```
:::
