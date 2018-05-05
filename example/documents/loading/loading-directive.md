::: demo
> `v-t-loading` 接收两个参数，第一个为是否加载，第二个为配置对象
```html
<t-row :gutter="20">
  <t-col :span="24">
    <div v-t-loading="[loading1, config]" style="width: 300px; height: 300px; text-align:center; border: 1px solid #eee">
      <t-divider content="展示指令加载效果"/>
      <p> 我是任意元素，请在顶级容器上使用 </p>
      <p> v-t-loading </p>
    </div>
  </t-col>
  
  <t-col :span="24" style="margin-top: 20px">
    <t-button @click="loading1 = !loading1">切换加载状态</t-button>
  </t-col>
</t-row>


<script>
export default {
  data () {
    return {
      config: {
        contentBgColor: 'rgba(0, 0, 0, .3)',
        iconColor: '#fff',
        textColor: '#fff',
        maskBgColor: 'rgba(0, 0, 0, 0)',
        width: 120,
        height: 100,
        iconClass: 'fa fa-circle-notch fa-spin',
        iconSize: '2em',
        text: '拼命加载中...'
      }
    }
  }
}
</script>
```
:::
