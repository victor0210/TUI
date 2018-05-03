::: demo
> 使用 `disabled` 属性开启禁用状态
```html
<t-cascader v-model="opt" disabled/>

<script>
export default {
  data () {
    return {
      opt: ['hp', '1000000', '1000000'],
    }
  }
}
</script>
```
:::
