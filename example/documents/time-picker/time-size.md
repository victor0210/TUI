::: demo
> 设置 `size` 属性快速使用TUI为您提供的预设尺寸
```html
<t-time-picker v-model="v" placeholder="选择时间" size="lg"/>
<t-time-picker v-model="v" placeholder="选择时间"/>
<t-time-picker v-model="v" placeholder="选择时间" size="sm"/>
<t-time-picker v-model="v" placeholder="选择时间" size="mini"/>

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
