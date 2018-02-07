:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-radio-group v-model="v">
      <t-radio label="北京" val='Beijing' outbox/>
      <t-radio label="上海" val='Shanghai' outbox/>
      <t-radio label="成都" val='Chengdu' outbox/>
      <t-radio label="广州" val='Guangzhou' outbox/>
    </t-radio-group>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      v: '',
    }
  }
}
</script>
```
:::
