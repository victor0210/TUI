::: demo
```html
<t-row :gutter="20">
  <t-col :span="6">
    <t-cascader v-model="opt" disabled/>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      opt: ['hp', '1000000', '1000000'],
    }
  }
}
</script>
```
:::
