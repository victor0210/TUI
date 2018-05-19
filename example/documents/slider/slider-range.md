::: demo
>  `min` 为最小值，`max` 为最大值，类型为数字
```html
<t-slider v-model="v" :min="-10" :max="10"/>

<script>
export default {
  data () {
    return {
      v: 0
    }
  }
}
</script>
```
:::
