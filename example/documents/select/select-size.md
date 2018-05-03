::: demo
> 设置 `size` 属性快速使用TUI为您提供的预设尺寸
```html
<t-select placeholder="Select" v-model="v" size="lg">
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val"/>
</t-select>

<t-select placeholder="Select" v-model="v">
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val"/>
</t-select>

<t-select placeholder="Select" v-model="v" size="sm">
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val"/>
</t-select>

<t-select placeholder="Select" v-model="v" size="mini">
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val"/>
</t-select>

<script>
export default {
  data () {
    return {
      v1: '1',
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
