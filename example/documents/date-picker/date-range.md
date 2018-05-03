:::demo
> `type` 为 `daterange` 开启区间选择模式
```html
<t-date-picker v-model="v" type="daterange" placeholder-start="起始日期" placeholder-end="截止日期"/>

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
