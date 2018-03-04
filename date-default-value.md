:::demo
```html
<div class="demo-block">
  <t-row :gutter="20">
   <t-col :span="6">
     <t-date-picker v-model="v" type="date" placeholder="选择日期"/>
   </t-col>
  </t-row>
</div>

<script>
export default {
  data () {
    return {
      v: '2018-1-1'
    }
  }
}
</script>
```
:::
