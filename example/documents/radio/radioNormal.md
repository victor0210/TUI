:::demo
> 设置 `label-left` 属性来定位label
```html
<t-radio label="label在右边" val="1" v-model="v"/>
<t-radio label="label在左边" val="2" label-left v-model="v"/>
<script>
export default {
  data () {
    return {
      v: '',
    }
  }
}
</script>
```
:::
