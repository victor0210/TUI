::: demo
> 设置 `size` 属性即可，可选 `lg` `sm`  `mini`，可配合设置width样式
```html
<t-input-number v-model="n" size="lg"/>
<t-input-number v-model="n"/>
<t-input-number v-model="n" size="sm" style="width: 150px"/>
<t-input-number v-model="n" size="mini" style="width: 120px"/>

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
