::: demo
> 设置 `range` 属性即可，类型为 `Number` 
```html
<t-input-number v-model="n1" :range="10"/>
<t-input-number v-model="n2" :range="20"/>

<script>
export default {
  data () {
    return {
      n1: 1,
      n2: 1
    }
  }
}
</script>
```
:::
