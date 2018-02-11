::: demo
```html
<t-row :gutter="20">
  <t-col :span="5">
    <t-input-number  v-model="n1" :range="10"/>
  </t-col>
</t-row>
<t-row :gutter="20">
  <t-col :span="5">
    <t-input-number  v-model="n2" :range="20"/>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      n1: 1,
      n2: 1
    }
  }
}
</script>
```
:::
