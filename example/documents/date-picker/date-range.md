:::demo
```html
<div class="demo-block">
  <t-row :gutter="20">
   <t-col :span="6">
     <t-date-picker v-model="v" type="daterange" placeholder-start="起始日期" placeholder-end="截止日期"/>
   </t-col>
  </t-row>
</div>

<script>
export default {
  data () {
    return {
      v: ''
    }
  }
}
</script>
```
:::
