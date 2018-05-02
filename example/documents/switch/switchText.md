:::demo
> 显示文字只需要设置 `active-text` 和 `inactive-text` 即可 
```html
<t-switch v-model="s" active-text="开" inactive-text="关" @change="changeHandler"/>

<script>
export default {
  data () {
    return {
      s: false
    }
  },
  methods: {
    changeHandler (val) {
      this.$TMessage.show({
        title: '"' + val + '" !',
        type: 'info',
        duration: 1000
      })
    }
  }
}
</script>
```
:::
