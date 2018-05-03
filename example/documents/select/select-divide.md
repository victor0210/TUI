::: demo
> `t-option-group` 接收唯一参数 `label` ，类型为 `String`
```html
<t-select placeholder="Select" v-model="v">
  <t-option-group label="城市">
    <t-option :key="1" label="选项1" val="1"/>
    <t-option :key="2" label="选项2" val="2"/>
    <t-option :key="3" label="选项3" val="3"/>
    <t-option :key="4" label="选项4" val="4"/>
    <t-option :key="5" label="选项5" val="5"/>
  </t-option-group>
  <t-option-group label="地区">
    <t-option :key="6" label="选项6" val="6"/>
    <t-option :key="7" label="选项7" val="7"/>
    <t-option :key="8" label="选项8" val="8"/>
    <t-option :key="9" label="选项9" val="9"/>
  </t-option-group>
</t-select>

<script>
export default {
  data () {
    return {
      v: '1'
    }
  }
}
</script>
```
:::
