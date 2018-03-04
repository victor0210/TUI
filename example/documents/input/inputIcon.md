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