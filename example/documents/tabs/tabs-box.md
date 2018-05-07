:::demo
> `type` 设置为 `box` 即可 
```html
<t-tabs type="box">
  <t-tab-panel v-for="(p, i) in tabPanels" :key="i+10" :title="p.title">
    <h3 style="height: 100px">为中华振兴而敲代码-Tab-{{p.title}}</h3>
  </t-tab-panel>
</t-tabs>

<script>
export default {
  data () {
    return {
      tabValue: 1
    }
  }  
}
</script>
```
:::
