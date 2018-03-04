:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-radio label="禁用" disabled val="1" v-model="v"/>
    <t-radio label="禁用并选用" disabled val="2" v-model="v"/>
  </t-col>
</t-row>
<script>
export default {
  data () {
    return {
      v: '2',
    }
  }
}
</script>
```
:::
