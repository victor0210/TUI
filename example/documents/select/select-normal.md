::: demo
> 在 `t-option` 中需要传入两个重要参数 `val` 和 `label`
```html
<t-select placeholder="select" v-model="v" @change="changeHandler">
  <t-option v-for="o in options" :key="o.val" :label="o.label" :val="o.val"/>
</t-select>

<script>
export default {
  data () {
    return {
      v: '2',
      options: [
        {label: '北京烤鸭', val: '1'},
        {label: '冷吃牛肉', val: '2'},
        {label: '驴肉火烧', val: '3'},
        {label: '宫保鸡丁', val: '4'},
        {label: '黄焖鸡米饭', val: '5'}
      ]
    }
  },
  methods: {
    changeHandler (val) {
      this.$TMessage.show({
        title: '选中值：' + val,
        type: 'info',
        duration: 1000
      })
    }
  }
}
</script>
```
:::
