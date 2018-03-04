:::demo
```html
<t-row :gutter="20">
  <t-col :span="8">
    <t-radio-group v-model="v">
      <t-radio label="北京" val="Beijing"/>
      <t-radio label="上海" val="Shanghai"/>
      <t-radio label="成都" val="Chengdu"/>
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
