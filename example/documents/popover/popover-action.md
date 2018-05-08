:::demo
> 弹出层理不仅用于展示，还可以做一些操作
```html
<t-popover position="bottom" trigger="click" hide-on-click v-model="visible" :width="250">
  <t-button type="primary" style="top: 200px; left: 500px">删除</t-button>
  <div slot="popover">
    <p style="margin-bottom: 10px">您确定删除这段消息吗？</p>
    <div style="text-align: right">
      <t-button size="sm" type="text" @click="visible = false">取消</t-button>
      <t-button size="sm" type="primary" @click="visible = false">确定</t-button>
    </div>
  </div>
</t-popover>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
```
:::
