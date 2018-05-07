:::demo
> `type` 设置为 `pipe` 开启管道样式，添加 `editable` 属性开启可关闭模式，目前 editable 只适用于 pipe 样式 
```html
<t-tabs editable @tab-remove="removeHandler" type="pipe">
  <t-tab-panel v-for="(p, i) in tabPanelsPipe" :key="i+10" :title="p.title">
    <h3 style="height: 100px;">为中华振兴而敲代码-Tab-{{p.title}}</h3>
  </t-tab-panel>
</t-tabs>

<t-button size="sm" style="margin-top: 30px; float: right" type="primary" @click="addTab">添加新标签</t-button>

<script>
export default {
  data () {
    return {
      tabPanelsPipe: [
        {title: '精忠报国'},
        {title: '国富民强'},
        {title: '强作解人'},
        {title: '人命危浅'},
        {title: '浅尝辄止'}
      ]
    }
  },
  methods: {
    removeHandler (idx) {
      this.tabPanelsPipe.splice(idx, 1)
    },
    addTab () {
      this.tabPanelsPipe.push({
        title: 'New Tab',
        content: 'new Tab'
      })
    }
  }
}
</script>
```
:::
