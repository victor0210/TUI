:::demo
> 可以通过添加 `slot` 为input组件设置其余内容，可选值为 `prefix` 和 `suffix`, 设置 `prefix-icon` 或 `suffix-icon` 可以在input内嵌入图标，但不可添加事件
```html
<t-input placeholder="Search ...">
  <t-button slot="suffix" icon="fa fa-search" type="primary" @click="search" :loading="loading"/>
</t-input>

<t-input placeholder="Search ..." prefix-icon="fa fa-search"/>
<script>
export default {
  data () {
    return {
      loading: false
    }
  },
  
  methods: {
    search () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$TMessage.show({
          'title': 'Search Complete!!'
        })
      }, 3000)
    }
  }
}
</script>
```
:::
