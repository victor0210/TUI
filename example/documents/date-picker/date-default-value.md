:::demo
> 以下提供了四种参考格式
```html
<t-date-picker v-model="dp2"/>
<t-date-picker v-model="dp21"/>
<t-date-picker v-model="dp22"/>
<t-date-picker v-model="dp23"/>

<script>
export default {
  data () {
    return {
      dp2: '2018-1-1',
      dp21: '2018 1 2',
      dp22: '2018,1,3',
      dp23: '2018/1/4'
    }
  }
}
</script>
```
:::
