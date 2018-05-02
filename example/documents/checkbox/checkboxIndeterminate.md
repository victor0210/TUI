:::demo
> 通过 `checkbox` 和 `checkbox-group` 的 `change` 事件获取值对 `indeterminate` 属性进行操作
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange"/>
  </t-col>
  <t-col :span="24">
    <t-checkbox-group @change="handleOptionChange" v-model="checkedCities">
      <t-checkbox v-for="o in options" :label="o.label" :val="o.val" :key="o.val"/>
    </t-checkbox-group>
  </t-col>
</t-row>

<script>
const arr = ['1', '2', '3', '4', '5']

export default {
  data () {
    return {
      options: [
        {label: '香蕉', val: '1'},
        {label: '苹果', val: '2'},
        {label: '梨子', val: '3'},
        {label: '香瓜', val: '4'},
        {label: '火龙果', val: '5'}
      ],
      cities: arr,
      isIndeterminate: false,
      checkAll: false,
      checkedCities: ['1', '2', '3']
    }
  },
  methods: {
    handleCheckAllChange (val) {
      this.checkedCities = val ? [...this.cities] : []
      this.isIndeterminate = false
    },
    handleOptionChange (value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length
    }
  }
}
</script>
```
:::
