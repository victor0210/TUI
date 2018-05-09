::: mk
> TUI命名规范为 `t-` 作为前缀加上组件名，如下
```html
<div id="app">
  <t-button>Weilcome to TUI !!</t-button>
  <t-switch v-model="switch"/>
</div>

<script>
export default {
  data () {
    return {
      switch: false
    }
  }
}
</script>
```
:::
