::: demo
>  设置 `border` 为带边框的表格
```html
<t-table :data="data" border>
  <t-table-column label="姓名" prop="name"/>
  <t-table-column label="年龄" prop="age"/>
  <t-table-column label="爱好" prop="habit"/>
  <t-table-column label="座右铭" prop="flag" :width="250"/>
</t-table>

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
  }
}
</script>
```
:::
