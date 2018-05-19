::: demo
>  默认样式传入value为数字，type `range` 为区间选择模式，传入值为数组，格式为 [small, big]
```html
<t-slider v-model="v"/>
<t-slider v-model="vRange" type="range"/>

<script>
export default {
  data () {
    return {
      v: 10,
      vRange: [20, 70]
    }
  }
}
</script>
```
:::
