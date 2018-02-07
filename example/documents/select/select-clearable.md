::: demo
```html
<t-row :gutter="20">
  <t-col :span="6">
    <t-select label="请选择" :clearable="true" v-model="val_4">
      <t-option :key="1" label="v1" val="v1"/>
      <t-option :key="2" label="v2" val="v2"/>
    </t-select>
  </t-col>
  <t-col :span="6">
    <t-select label="请选择" :clearable="true" v-model="val_5" :multiple="true">
      <t-option :key="1" label="v1" val="v1"/>
      <t-option :key="2" label="v2" val="v2"/>
      <t-option :key="3" label="v3" val="v3"/>
      <t-option :key="4" label="v4" val="v4"/>
      <t-option :key="5" label="v5" val="v5"/>
      <t-option :key="6" label="v6" val="v6"/>
      <t-option :key="7" label="v7" val="v7"/>
      <t-option :key="8" label="v8" val="v8"/>
      <t-option :key="9" label="v9" val="v9"/>
    </t-select>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      val_4: 'v1',
      val_5: ['v1']
    }
  }
}
</script>
```
:::
