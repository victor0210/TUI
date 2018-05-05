:::demo
> 使用 `t-radio-group` 可简化绑定值的操作，并提供了唯一的 `change` 事件，必须通过操作组下面的单选框才能触发哦！
```html
<t-radio label="北京" val="Beijing" v-model="v"/>
<t-radio label="上海" val="Shanghai" v-model="v"/>
<t-radio label="成都" val="Chengdu" v-model="v"/>

<t-radio-group v-model="v" @change="changeHandler">
  <t-radio label="北京" val="Beijing"/>
  <t-radio label="上海" val="Shanghai"/>
  <t-radio label="成都" val="Chengdu"/>
</t-radio-group>
        
<script>
export default {
  data () {
    return {
      v: '',
    }
  },
  methods: {
    handleChange (val) {
      this.$TMessage.show({
        content: 'choose "' + val + '" !',
        type: 'info',
        duration: 1000
      })
    }
  }
}
</script>
```
:::
