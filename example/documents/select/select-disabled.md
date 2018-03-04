::: demo
```html
<t-row :gutter="20">
  <t-col :span="6">
    <t-select label="请选择" :disabled="true">
      <t-option :key="9" label="v9" val="v9"/>
    </t-select>
  </t-col>
  <t-col :span="6">
    <t-select label="请选择" :disabled="true" :multiple="true" v-model="val_3">
      <t-option :key="1" label="v1" val="v1"/>
      <t-option :key="9" label="v9" val="v9"/>
    </t-select>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      val_3: ['v1']
    }
  }
}
</script>
```
:::
