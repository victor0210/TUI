::: demo
> 使用 `clearable` 开启清除功能
```html
<t-select label="请选择" disabled v-model="v1" clearable>
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val" :disabled="o.disabled"/>
</t-select>

<t-select label="请选择" disabled multiple v-model="v2" clearable>
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
