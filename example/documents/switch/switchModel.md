:::demo
```html
 <div class="demo-block">
   <t-row :gutter="20">
      <t-col :span="24">
          <t-switch v-model="state"></t-switch>
          <span>{{ state }}</span>
      </t-col>
   </t-row>
</div>
<script>
export default {
  data () {
    return {
      state: true
    }
  },
}
</script>
```
:::