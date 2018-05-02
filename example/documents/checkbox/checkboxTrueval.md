:::demo
> 设置 `true-value` 属性为 `true` 将会再选中时返回 `val`，默认选中返回 `true`，当使用 true-value 并想通过修改 value 绑定值选中时，值必须等于 val 而不是true
```html
<t-checkbox label="默认使用" val="TrueValue" v-model="v1"/> 当前值: {{ v1 }}

<t-checkbox label="TrueValue" val="TrueValue" true-value v-model="v2"/> 当前值: {{ v2 }}

<script>
export default {
  data () {
    return {
      v1: false,
      v2: false
    }
  }
}
</script>
```
:::
