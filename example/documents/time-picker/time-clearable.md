:::demo
> 添加 `clearable` 属性开启清除功能
```html
<t-time-picker v-model="v" placeholder="选择时间" clearable/>

<script>
export default {
  data () {
    return {
      v: ''
    }
  }
}
</script>
```
:::
