::: demo
> 给 `t-select` 组件加上disabled属性即可禁用下拉框
```html
<t-select label="请选择" disabled v-model="v1">
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
</t-select>

<t-select label="请选择" disabled multiple v-model="v2">
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
</t-select>

<script>
export default {
  data () {
    return {
      v1: '1',
      v2: ['1'],
      options: [
        {label: '北京烤鸭', val: '1'},
        {label: '冷吃牛肉', val: '2'},
        {label: '驴肉火烧', val: '3'},
        {label: '宫保鸡丁', val: '4'},
        {label: '黄焖鸡米饭', val: '5'}
      ]
    }
  }
}
</script>
```
:::
