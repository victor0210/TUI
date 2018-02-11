::: demo
```html
<t-row :gutter="20">
  <t-col :span="5">
    <t-input-number  v-model="n" side-control/>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      n: 1
    }
  }
}
</script>
```
:::
