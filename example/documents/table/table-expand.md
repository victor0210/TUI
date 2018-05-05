::: demo
>  加入 `type` 为 `expand` 的列即可，行变量内容可通过 slot-scope 获取，如下demo  

```html
<t-row>
  <t-col :span="24">
    <t-table :data="data">
      <t-table-column width="60" type="expand">
        <template slot-scope="{row}">
          <t-row>
            <t-col>
              <h1>个人简历</h1>
            </t-col>
            <t-col :span="12">
              <p>姓名：{{ row.name }}</p>
              <p>年龄：{{ row.age }}</p>
              <p>爱好：{{ row.habit }}</p>
              <p>座右铭：{{ row.flag }}</p>
            </t-col>
            <t-col :span="12">
              <img src="/static/img/TV.278ceeb.jpg" alt="" style="width: 100px; height: 100px;display: block">
            </t-col>
          </t-row>
        </template>
      </t-table-column>
      <t-table-column label="姓名" prop="name"/>
      <t-table-column label="年龄" prop="age"/>
      <t-table-column label="爱好" prop="habit"/>
      <t-table-column label="座右铭" prop="flag"/>
    </t-table>
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
  }
}
</script>
```
:::
