:::demo
> `min` 为最少选中个数 `max` 为最多选中个数，类型为 `Number`
```html
<t-checkbox-group v-model="v" :min="1">
  <t-checkbox label="西瓜" val='1'/>
  <t-checkbox label="苹果" val='2'/>
  <t-checkbox label="栗子" val='3'/>
  <t-checkbox label="香蕉" val='4'/>
</t-checkbox-group>

<script>
export default {
  data () {
    return {
      v: []
    }
  }
}
</script>
```
:::
