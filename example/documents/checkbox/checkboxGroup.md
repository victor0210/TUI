:::demo
> 使用 `t-chekcbox-group` 可简化绑定值的操作，还可限制选中个数等，见后续demo
```html
<t-checkbox label="北京" val="Beijing" v-model="v1"/>
<t-checkbox label="上海" val="Shanghai" v-model="v1"/>
<t-checkbox label="成都" val="Chengdu" v-model="v1"/>

<t-checkbox-group v-model="v1">
  <t-checkbox label="北京" val="Beijing"/>
  <t-checkbox label="上海" val="Shanghai"/>
  <t-checkbox label="成都" val="Chengdu"/>
</t-checkbox-group>
```
:::
