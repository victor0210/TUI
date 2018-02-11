:::demo
```html
<t-row :gutter="20">
  <t-col :span="24">
    <t-radio label="默认" val="1" v-model="v"/>
    <t-radio label="label在左边" labelLeft val="2" v-model="v"/>
  </t-col>
</t-row>

<script>
export default {
  data () {
    return {
      v: '1',
    }
  }
}
</script>
```
:::
