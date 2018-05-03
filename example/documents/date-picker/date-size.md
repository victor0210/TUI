::: demo
> 设置 `size` 属性快速使用TUI为您提供的预设尺寸
```html
<t-date-picker v-model="v" placeholder="选择日期" clearable size="lg"/>
<t-date-picker v-model="v" placeholder="选择日期" clearable/>
<t-date-picker v-model="v" placeholder="选择日期" clearable size="sm"/>
<t-date-picker v-model="v" placeholder="选择日期" clearable size="mini"/>

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
