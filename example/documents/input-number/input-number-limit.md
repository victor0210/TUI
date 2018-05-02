::: demo
> `max` 为最大值，`min` 为最小值，类型都为 `Number`
```html
<t-input-number v-model="n" :max="10" :min="0"/>

<script>
export default {
  data () {
    return {
      n: 1
    }
  }
}
</script>
```
:::
