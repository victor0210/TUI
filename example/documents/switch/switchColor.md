:::demo
> 显示文字只需要设置 `active-text` 和 `inactive-text` 的颜色值即可 
```html
<t-switch v-model="s" active-color="#ffcc00" inactive-color="#000"/>

<script>
export default {
  data () {
    return {
      s: true
    }
  }
}
</script>
```
:::
