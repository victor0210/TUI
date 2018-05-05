::: demo
>  加入 `type` 为 `index` 的列即可 
```html
<t-table :data="data" :body-max-height="200">
  <t-table-column type="index" width="60"/>
  <t-table-column label="姓名" prop="name"/>
  <t-table-column label="年龄" prop="age"/>
  <t-table-column label="爱好" prop="habit"/>
  <t-table-column label="座右铭" prop="flag"/>
  <t-table-column label="家乡" prop="home"/>
  <t-table-column label="工作经验" prop="exp"/>
</t-table>

<script>
export default {
  data () {
    return {
      data: [
        {name: '小红', age: '20', habit: '网球', flag: '人生没有回头路', home: '北京丰台', exp: '3年'},
        {name: '小李', age: '18', habit: '篮球，游戏', flag: '为中华民族的振兴而编程', home: '广东深圳', exp: '实习'},
        {name: '小张', age: '32', habit: '羽毛球，跑步', flag: '吃吃喝喝开开心心，一切平安才是福', home: '山西太原', exp: '12年'},
        {name: '小王', age: '22', habit: '游泳，健身', flag: '身体是革命的本钱', home: '四川成都', exp: '3年'},
        {name: '小刘', age: '29', habit: '看电视，玩ps', flag: '休息是为了更好的工作', home: '甘肃兰州', exp: '8年'},
        {name: '小胡', age: '20', habit: '呵呵呵', flag: '哼哼哈哈嘿嘿呼呼', home: '河北沧州', exp: '1年'}
      ]
    }
  }
}
</script>
```
:::
