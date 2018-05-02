:::demo
> 设置 `disabled` 属性为 `true` 即可禁用单选框，不同于 checkbox，radio 的默认选中是通过 v-model 来实现的
```html
<t-radio label="禁用" disabled val="1" v-model="v"/>
<t-radio label="禁用并选用" disabled val="2" v-model="v"/>
<script>
export default {
  data () {
    return {
      v: '2',
    }
  }
}
</script>
```
:::
