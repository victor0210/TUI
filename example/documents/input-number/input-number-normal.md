::: demo
> 绑定value值即可，类型为 `Number` 或 `String`
```html
<t-input-number v-model="n" />
<t-input-number v-model="n" type="primary"/>
<t-input-number v-model="n" type="success"/>
<t-input-number v-model="n" type="warning"/>
<t-input-number v-model="n" type="danger"/>
<t-input-number v-model="n" type="info"/>

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
