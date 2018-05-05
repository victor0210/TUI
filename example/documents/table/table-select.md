::: demo
>  添加 `highlight-current-row` 设置可单选，`current-change` 为选择变化回调，通过表格的 `setCurrentRow` 方法可设置选中的行，传入参数为 index 
```html
<t-row>
  <t-col :span="24">
    <t-table :data="data" highlight-current-row :current-change="currentChange" ref="t_table">
      <t-table-column type="index" width="60"/>
      <t-table-column label="姓名" prop="name"/>
      <t-table-column label="年龄" prop="age"/>
      <t-table-column label="爱好" prop="habit"/>
      <t-table-column label="座右铭" prop="flag"/>
    </t-table>
  </t-col>
  
  <t-col :span="24">
    <t-button @click="setRow(1)">选中第二行</t-button>
    <t-button @click="setRow()">重置</t-button>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      data: [
        {name: '小红', age: '20', habit: '网球', flag: '人生没有回头路'},
        {name: '小李', age: '18', habit: '篮球，游戏', flag: '为中华民族的振兴而编程'},
        {name: '小张', age: '32', habit: '羽毛球，跑步', flag: '吃吃喝喝开开心心，一切平安才是福'},
        {name: '小王', age: '22', habit: '游泳，健身', flag: '身体是革命的本钱'},
        {name: '小刘', age: '29', habit: '看电视，玩ps', flag: '休息是为了更好的工作'},
        {name: '小胡', age: '20', habit: '呵呵呵', flag: '哼哼哈哈嘿嘿呼呼'}
      ]
    }
  },
  methods: {
    currentChange (val) {
      console.log(val)
    },
    setRow (idx) {
      this.$refs.t_table.setCurrentRow(idx)
    }
  }
}
</script>
```
:::
