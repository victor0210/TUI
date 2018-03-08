:::demo
```html
<div class="demo-block">
  <t-row :gutter="20">
   <t-col :span="6">
     <t-date-picker v-model="v" type="month" placeholder="选择年月"/>
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
