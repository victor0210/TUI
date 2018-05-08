:::demo
> 可以在 `slot-popover` 里面添加更复杂的内容哦
```html
<t-popover position="right-bottom" trigger="click" :width="800">
  <t-button type="primary">显示内容</t-button>
  <template slot="popover">
    <t-table :data="data" border stripe>
      <t-table-column label="姓名" prop="name" :width="100"/>
      <t-table-column label="年龄" prop="age" :width="100"/>
      <t-table-column label="爱好" prop="habit"/>
      <t-table-column label="名言" prop="flag"/>
    </t-table>
  </template>
</t-popover>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
```
:::
